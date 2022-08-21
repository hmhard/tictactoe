import { Button, Grid } from "@mui/material";

export  function Cell({index,cell,play}){

    return <Grid item xs={4} m={0} p={0}  >
        <Button mx={4}  fullWidth variant="outlined" style={{border:"2px solid black",padding:4,m:0,fontWeight:"bold",fontSize:"34px"}}  onClick={()=>play(index)}>{cell}</Button>
        </Grid>
  }
  