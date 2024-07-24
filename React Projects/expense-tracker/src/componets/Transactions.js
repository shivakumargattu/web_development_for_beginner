import { Box, Divider, List, Typography } from '@mui/material'
import React from 'react'
import Transtion from './Transtion'


const Transactions = ({transections}) => {
 
  return (
    <Box>
        <Typography variant='h5'>Transaction History</Typography>
        <Divider/>
        <List>

          {transections.map((transaction,index)=>(
            
            
            <Transtion key={index} transaction={transaction}/>
          ))}
        </List>
    </Box>
  )
}

export default Transactions