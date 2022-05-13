import React from 'react';
import {Grid} from '@mui/material';
import userData from './userData9';

const Shakl9 = () => {
    return (
        <Grid container>
         <Grid lg={12} textAlign="center" padding={2} marginTop={1}>
           <h2 style={{color:"#0288D1"}}>ISHLAB CHIQARISH VA DIPLOM OLDI AMALIYOTLAR QAYDNOMASI</h2>
         </Grid>
         <Grid lg={12} padding={5} display="flex" justifyContent="space-between">
           <h3 style={{textDecoration:'underline'}}>Amaliyot nomi: </h3>
           <h3>Ajratilgan soat: <b>90</b></h3>
         </Grid>
         <Grid lg={12} padding={5}>
             <h3 style={{textDecoration:'underline'}}>Amaliot rahbarining familiyasi va ismi:</h3>
         </Grid>
         <Grid lg={12} className="shakl6_1" align="center" marginBottom={4}>
           <table>
             <tr align="center">
              <th rowSpan={2}>T/r</th>
              <th rowSpan={2}>O'quvchilarning familiyasi va ismi</th>
              <td rowSpan={2} width={'25%'}><b>Amaliyot o'tagan joy nomi</b></td>
              <td rowSpan={2} width={'25%'}><b>Amaliyot o'tagan joy manzili</b></td>
              <td colSpan={2}><b>Muddati</b></td>
              <td rowSpan={2}><b>Yakuniy ball</b></td>
              <td rowSpan={2}><b>Amaliyot rahbari imzosi</b></td>
             </tr>
             <tr align="center">
                 <td><b>Boshlanish sana</b></td>
                 <td><b>Yakunlash sana</b></td>
             </tr>
             {
               userData.map(item => (
                 <tr align="center" key={item.id}>
                    <td>{item.id}</td>
                    <td align="left">{item.name}</td>
                    <td>{item.joynomi}</td>
                    <td>{item.manzil}</td>
                    <td>{item.boshsana}</td>
                    <td>{item.yaksana}</td>
                    <td>{item.yakball}</td>
                    <td>{item.imzo}</td>
                 </tr>
               ))
             }
        </table>
      </Grid>
    </Grid>
    );
};

export default Shakl9;