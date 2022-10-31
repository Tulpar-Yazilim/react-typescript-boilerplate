import React, { useEffect } from 'react'
import { filter } from 'lodash'
import { useState, memo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
// material
import {
  Card,
  Table,
  Stack,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material'

import { Page, Iconify, SearchNotFound } from '../'
import Scrollbar from './_partials/Scrollbar'
import TableHeader from './_partials/TableHeader'

import USERLIST from '../../_mock/user'
import TableToolbar from './_partials/TableToolbar'
import TableItemMoreMenu from './_partials/TableItemMoreMenu'

function descendingComparator(a: any, b: any, orderBy: any) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order: any, orderBy: any) {
  return order === 'desc'
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy)
}

function applySortFilter(array: [any], comparator: any, query: any) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  if (query) {
    return filter(
      array,
      (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    )
  }
  return stabilizedThis.map((el) => el[0])
}

interface ITable {
  headers: Array<any> // type ları yazılacak
  actions: Array<any>
  children?: any
  rowActions?: any
  title: string
}

const TableList = (props: ITable) => {
  const { headers, actions, rowActions, title } = props
  const slots = props.children || []
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState('asc')
  const [selected, setSelected] = useState([]) as any
  const [orderBy, setOrderBy] = useState('name')
  const [filterName, setFilterName] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [existingSlotIds, setExistingSlotIds] = useState([]) as any

  useEffect(() => {
    setExistingSlotIds(Array.isArray(slots) ? slots.map((item: any) => item.props.id) :[slots.props.id] )
  }, [])

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: any) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n: any) => n.id) as Array<any>
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event: any, name: string) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected: any = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }
    setSelected(newSelected)
  }

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleFilterByName = (event: any) => {
    setFilterName(event.target.value)
  }

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0

  const filteredUsers = applySortFilter(
    USERLIST,
    getComparator(order, orderBy),
    filterName,
  )

  const isUserNotFound = filteredUsers.length === 0

  return (
    <Page title="User">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New User
          </Button>
        </Stack>

        <Card>
          <TableToolbar
            numSelected={selected.length}
            selecteds={selected}
            filterName={filterName}
            onFilterName={handleFilterByName}
            actions={actions}
            rowActions={rowActions}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableHeader
                  order={order}
                  orderBy={orderBy}
                  headLabel={headers}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { id } = row
                      const isItemSelected = selected.indexOf(id) !== -1

                      return (
                        <TableRow
                          hover
                          key={id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, id)}
                            />
                          </TableCell>
                          {headers.map((rowElement) =>
                            rowElement.id !== id &&
                            !existingSlotIds.includes(rowElement.id) ? (
                              <TableCell>{row[rowElement.id]}</TableCell>
                            ) : (
                              <TableCell>
                                {(Array.isArray(slots)
                                  ? slots.find(
                                      (i: any) => i.props.id === rowElement.id,
                                    )
                                  : slots
                                ).props.children(row[rowElement.id], row)}
                              </TableCell>
                            ),
                          )}
                          <TableCell align="right">
                            <TableItemMoreMenu />
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  )
}

export default memo(TableList)
