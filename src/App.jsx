import React,{ useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import {TextField,Box,Stack,Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import Data from './components/Data/Data';

function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [data,setData]=useState([]);

  const addData=()=>{
    if(name!==""||email!==""){
    setData([...data,{name,email}])
    setName("")
    setEmail("")
  }
}

  const removeData=(index)=>{
    const arr=data;
    arr.splice(index,1);
    setData([...arr]);
}


  return (
    <>
    <Header />
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
        onClick={addData} 
        color='success'
        ><AddIcon/>
      </Button>
    </Stack>
    <Stack direction={"row"}  className='stackData'>
    <h3>Name</h3>
    <h3>Email</h3>
    <h3>Remove</h3>
  </Stack>
    {data.map((ele,index)=>{return(<Data name={ele.name} fun={()=>{console.log(index); removeData(index) }} email={ele.email} key={index} />)})
}
    </>
  )
}

export default App
