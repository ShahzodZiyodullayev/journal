import React from 'react';
import {Grid} from '@mui/material';
import userData from './userData8';

const Shakl8 = () => {
    return (
        <Grid container>
      <Grid lg={12} textAlign="center" padding={2} marginTop={1}>
          <h2 style={{color:"#0288D1"}}>ISHLAB CHIQARISH VA DIPLOM OLDI AMALIYOTLAR MAVZUSI</h2>
      </Grid>
      <Grid lg={12} padding={5}>
        <h3 style={{textDecoration:'underline'}}>Fan(modul)ning nomi: </h3>
      </Grid>
      <Grid lg={12} className="shakl6_1" align="center">
        <table>
             <tr align="center">
              <th>T/r</th>
              <th>O'quvchilarning familiyasi va ismi</th>
              <td width={'40%'}><b>Mashg'ulot mavzusi</b></td>
              <td><b>Soat</b></td>
              <td><b>Mashg'ulot o'tkazilgan sana</b></td>
              <td><b>Amaliyot rahbarining imzosi</b></td>
             </tr>
             {
               userData.map(item => (
                 <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.mavzu}</td>
                    <td>{item.soat}</td>
                    <td>{item.sana}</td>
                    <td>{item.imzo}</td>
                 </tr>
               ))
             }
        </table>
      </Grid>
    </Grid>
    );
};

export default Shakl8;