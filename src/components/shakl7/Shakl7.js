import React from 'react';
import {Grid} from '@mui/material';
import userData from './userData7';

function Shakl7() {
  return (
    <Grid container>
      <Grid lg={12} textAlign="center" padding={2} marginTop={1}>
          <h2 style={{color:"#0288D1"}}>KURS ISHLAR QAYDNOMASI</h2>
      </Grid>
      <Grid lg={12} padding={5}>
        <h3 style={{textDecoration:'underline'}}>Fan(modul)ning nomi: </h3>
      </Grid>
      <Grid lg={12} className="shakl6_1" align="center">
        <table>
             <tr>
              <th>T/r</th>
              <th>O'quvchilarning familiyasi va ismi</th>
              <td align='center'><b>Kurs ishi mavzusi</b></td>
              <td style={{writingMode:'vertical-lr'}}><b>Kurs ishi bahosi</b></td>
              <td style={{writingMode:'vertical-lr'}}><b>Qabul qilingan sana</b></td>
              <td><b>O'quvchining imzosi</b></td>
             </tr>
             {
               userData.map(item => (
                 <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.mavzu}</td>
                    <td>{item.baho}</td>
                    <td>{item.sana}</td>
                    <td>{item.imzo}</td>
                 </tr>
               ))
             }
        </table>
      </Grid>
    </Grid>
  )
}

export default Shakl7