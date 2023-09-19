import React,{useState} from 'react'
import propTypes from 'prop-types'

const Inputs = () => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [data,setData]=useState([]);

    const addData=()=>{
        if(name!==""||email!==""){
        setData([...data,{name,email}])
        setName("")
        setEmail("")
      }
  return (
    <Stack className='stackInputs'
      spacing={2}
      direction={"row"}
      >
      <TextField 
        id="name"  
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        type='name' 
        label="Name"  
        variant="outlined"
      />
      <TextField 
        id="email" 
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        type='email'
        label="Email" 
        variant="outlined"
      />
      <Button 
      id="btnAdd"
      variant="contained"
      onClick={addData} color='success'><AddIcon/></Button>
    </Stack>
  )
}
}

export default Inputs