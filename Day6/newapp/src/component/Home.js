import React from 'react';
import { styled } from '@mui/material/';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Home=()=>{
    const Item=styled(Paper)(()=>({
        textAlign: 'center',
    }))
}

export default function BasicGrid() {
  return (
    <>
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>
  );
}