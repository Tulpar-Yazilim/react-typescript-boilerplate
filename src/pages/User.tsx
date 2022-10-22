import React from 'react'
import TableList from '../components/Table/Table'
import Slot from '../components/Slot/Slot'

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false, sort: true },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
]

const TABLE_ACTIONS = [
  {
    icon: 'ic:round-filter-list',
    tooltip: 'Filtrele',
    onPress: () => {
      alert('test alert')
    },
  },
  {
    icon: 'ic:round-add',
    tooltip: 'Ekle',
    onPress: () => {
      alert('test asdşlfkjaşsldfj')
    },
  },
  {
    icon: 'ic:round-delete',
    tooltip: 'SİL',
    onPress: () => {
      alert('malik korucu')
    },
  },
]

const TABLE_ROW_ACTIONS = [
  {
    icon: 'eva:trash-2-fill',
    tooltip: 'malik korucu',
    onPress: (item: any) => {
      console.log(item)
    },
  },
]

const UserList = () => {
  return (
    <div>
      <TableList
        title="Burası tablo ismi"
        headers={TABLE_HEAD}
        actions={TABLE_ACTIONS}
        rowActions={TABLE_ROW_ACTIONS}
      >
        {/*<Slot id="name">
          {(item: string) => (<div>{ item.toUpperCase() }</div>)}
        </Slot>
        <Slot id="isVerified">
          {(item: string) => (<div>{ item ? 'Yes' : 'No'}</div>)}
        </Slot>*/}
      </TableList>
    </div>
  )
}

export default UserList
