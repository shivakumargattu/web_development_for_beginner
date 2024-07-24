import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Container=styled(Box)`
display:flex;
&>div{
    flex:1;
    padding:10px;
    margin:10px;
}`

const ExpencesCard = ({transections}) => {
    const amount=transections.map(transation=>transation.amount);
    const income=amount.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    
    const expense=amount.filter(item=>item<0).reduce((acc,item)=>(acc-=item),0).toFixed(2);
  return (
    <Container>
        <Card>
            <CardContent>
                <Typography>Income</Typography>
                <Typography style={{color:"green"}}>₹{income}</Typography>
            </CardContent>
        </Card>

        <Card>
            <CardContent>
                <Typography>Expense</Typography>
                <Typography style={{color:"red"}}>₹{expense}</Typography>
            </CardContent>
        </Card>
    </Container>
  )
}

export default ExpencesCard