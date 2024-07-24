import { ListItem, ListItemText } from '@mui/material'
import React from 'react'


const Transtion = ({transaction}) => {
  const color=transaction.amount>0?"green":"red";
  return (
    < ListItem style={{background:`${color}`,color:"#fff",margin:"10px", borderRadius:"8px"}}>
      <ListItemText>{transaction.text}</ListItemText>
      
      <ListItemText>{transaction.amount}</ListItemText>
    </ListItem>
  )
}

export default Transtion