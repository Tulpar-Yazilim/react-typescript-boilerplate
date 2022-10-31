import React from 'react'
import { Box } from '@mui/system'

const Slot = (props: any) => {
  const { id, children } = props
  return <Box id={id}>{children}</Box>
}

export default Slot;
