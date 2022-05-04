import React from 'react'
import Grid from '@mui/material/Grid';
import './shakl2.css';
import DarsJadval from './DarsJadval';

function Shakl2() {
  return (
    <>
<Grid container>
   <Grid lg={12} sx={12} backgroundColor='#0288D1' textAlign='center' padding={2}>
     <h2 style={{color: "#fff"}}>O'QUV GURUHINING TASHKILIY TUZILMASI VA DARS JADVALI</h2>
   </Grid>
   <Grid lg={12} sx={12} padding={2}>
     <h3 style={{margin:"10px", textDecoration:"underline"}}>Guruh rahbari: MAjidov E</h3>
     <h3 style={{margin:"10px", textDecoration:"underline"}}>Guruh sardori: Familiya Ismi</h3>
   </Grid>
   <Grid lg={12} sx={12} textAlign='center' padding={2}>
      <h2 style={{color: "#0288D1"}}>DARS JADVALI</h2>
   </Grid>
   <Grid lg={12} sx={12} textAlign='right' paddingRight={3}>
      <h3 style={{textDecoration:"underline"}}>I-Semestr</h3>
   </Grid>
</Grid>
<Grid container marginTop={2}>
  <Grid className='jadval' lg={12}>
       <DarsJadval />     
  </Grid>
</Grid>
<Grid container marginTop={2}>
  <Grid lg={12} sx={12} textAlign='center' padding={2}>
      <h2 style={{color: "#0288D1"}}>DARS JADVALI</h2>
   </Grid>
   <Grid lg={12} sx={12} textAlign='right' paddingRight={3}>
      <h3 style={{textDecoration:"underline"}}>II-Semestr</h3>
   </Grid> 
</Grid>
<Grid container marginTop={2}>
  <Grid className='jadval' lg={12}>
       <DarsJadval />     
  </Grid>
</Grid>
 </>
  )
}

export default Shakl2