
import './App.css';


import {Box, Typography,styled} from "@mui/material"
import { Balance } from './componets/Balance';
import ExpencesCard from './componets/ExpencesCard';
import NewTransaction from './componets/NewTransaction';
import { useState } from 'react';
import Transactions from './componets/Transactions';
const Header=styled(Typography)`
margin:0;
font-size:36px;
color:blue;
text-transform:uppercase;`

const Component=styled(Box)`
display:flex;
background:#fff;
width:800px;
padding:10px;
border-radius:20px;
margin:auto;
&>div{
  height:70vh;
  width:50%;
  padding:12px;

  
}

`




function App() {

  const [transection,setTransaction]=useState([
    {
      id:1,text:"Books",amount:-2000
    },
    {
      id:2,text:"slary",amount:26000
    },
    {
      id:3,text:"cloths",amount:-7000
    },
    {
      id:4,text:"Bonus",amount:5000
    }

  ])

  

  return (
    <Box className="App">
      <Header >
   Expense Tracker
</Header>
<Component>
  <Box>
    <Balance transections={transection}/>
    <ExpencesCard transections={transection}/>
    <NewTransaction  setTransaction={setTransaction}/>
  </Box>
  <Box>
<Transactions transections={transection}/>
      </Box>
</Component>

    </Box>
  );
}

export default App;
