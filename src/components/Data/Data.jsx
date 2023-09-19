import React from 'react'

import './Data.css'
import propTypes from 'prop-types'
import {TextField,Box,Stack,Button} from '@mui/material';

const Data = props => {
  const remData=props.fun;
    return (
    <Stack direction={"row"}  className='stackData'>
    <h3>{props.name}</h3>
    <h3>{props.email}</h3>
    <Button variant="contained" color="warning" onClick={remData}>Remove</Button>
  </Stack>
  )
}


Data.defaultProps={
    name:"Name",
    email:"Email",
    element:"h3"
}

export default Data