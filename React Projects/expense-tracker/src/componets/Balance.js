import { Box, styled, Typography } from '@mui/material'
import React from 'react'
const BalanceText=styled(Typography)`
font-style:"roboto";
font-size:20px;
`
export const Balance = ({transections}) => {
  
  const amount=transections.map(transation=>transation.amount);
const total=amount.reduce((amount,item)=>(amount+=item),0).toFixed(2);

  return (
    
    <Box>
<BalanceText>Balance:₹ {total}</BalanceText>
    </Box>
  )
}
