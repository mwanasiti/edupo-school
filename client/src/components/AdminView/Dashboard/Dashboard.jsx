
import { BorderColor, Group, Person, School } from '@mui/icons-material'
import { Box, Card, CardContent, Typography,  } from '@mui/material'
import React from 'react'

function Dashboard() {
  return (

    <Box style={{width:"100px", marginLeft:"100px"}} >
      <Card style={{background:"grey", marginTop:"40px", width:"200px", height:"150px"}}>
        <CardContent>
          <Typography gutterBottom variant='h7' component='div' ><School/>Students </Typography>
        </CardContent>
      </Card>
      <Card style={{background:"green", marginTop:"10px", width:"200px" , height:"150px"}}>
        <CardContent>
          <Typography gutterBottom variant='h7' component='div'><BorderColor/> Teachers </Typography>
        </CardContent>
      </Card>
      <Card style={{background:"pink", marginTop:"10px", width:"200px" , height:"150px"}}>
        <CardContent>
          <Typography gutterBottom variant='h7' component='div'><Person/>Parents </Typography>
        </CardContent>
      </Card>
      <Card style={{background:"purple", marginTop:"10px", width:"200px" , height:"150px"}}>
        <CardContent>
          <Typography gutterBottom variant='h7' component='div'><Group/>Staff </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Dashboard