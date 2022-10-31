import React from 'react'
import { styled } from '@mui/material/styles'
import {
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  OutlinedInput,
  InputAdornment,
} from '@mui/material'
import Iconify from '../../../components/Iconify'

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}))

const SearchStyle = styled(OutlinedInput)(({ theme }: any) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': { width: 320 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}))

export default function TableToolbar(props: any) {
  const { numSelected, filterName, onFilterName, actions, rowActions, selecteds } = props

  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <SearchStyle
          value={filterName}
          onChange={onFilterName}
          placeholder="Search user..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <div>
          {rowActions && rowActions.map((item: any) => (
            <Tooltip title={item.tooltip}>
              <IconButton onClick={()=> item.onPress(selecteds)}>
                <Iconify icon={item.icon} />
              </IconButton>
            </Tooltip>
          ))}
        </div>
      ) : (
        <div>
          {actions?.map((item: any) => (
            <Tooltip title={item.tooltip}>
              <IconButton onClick={item.onPress}>
                <Iconify icon={item.icon} />
              </IconButton>
            </Tooltip>
          ))}
        </div>
      )}
    </RootStyle>
  )
}
