import React from 'react';
import "./shakl6.css";
import userData from './UserData';

import {Grid} from '@mui/material'; 

function Shakl6_1() {
  return (
    <Grid container>
      <Grid lg={12} textAlign="center" padding={2} marginTop={1}>
       <h2 style={{color:"#0288D1"}}>O'QUV AMALIYOTDA O'QUVCHILARNI BAHOLASH, DAVOMAT</h2>
      </Grid>
      <Grid lg={12} display="flex" padding={5} justifyContent="space-between">
        <h3>Amaliyot nomi: <b>Chilangarlik ishi</b></h3>
        <h3>ajratilgan soat: <b>90</b></h3>
      </Grid>
      <Grid lg={12} className="shakl6_1" align="center">
         <table>
              <tr>
                <th rowSpan={2}>T/r</th>
                <th rowSpan={2}>O'quvchilarning familiyasi va ismi</th>
                <td align='center' colSpan={15}><b>Mashg'ulot o'tkazilgan sana</b></td>
              </tr>
             <tr className='table_row2'>
               <td>31.01</td>
               <td>31.01</td>
               <td>31.01</td>
               <td>31.01</td>
               <td>14.02</td>
               <td>14.02</td>
               <td>28.02</td>
               <td>28.02</td>
               <td>28.02</td>
               <td>28.02</td>
               <td>28.02</td>
               <td>28.02</td>
               <td>28.02</td>
               <td>28.02</td>
               <td>28.02</td>
             </tr>
             {
               userData.map(item => (
                 <tr key={item.id}>
                    <td align='center'>{item.id}</td>
                    <td>{item.name}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                 </tr>
               ))
             }
         </table>
      </Grid>
      <Grid lg={12} textAlign="center" padding={2} marginTop={5}>
       <h2 style={{color:"#0288D1"}}>O'TILGAN MASHG'ULOTLAR MAVZUSI</h2>
      </Grid>
      <Grid lg={12} padding={5}>
        <h3>Amaliyot rahbarining familiyasi va ismi: <b>Djumayev O</b></h3>
      </Grid>
      <Grid lg={12} className="shakl6_1" align="center" marginBottom={5}>
         <table>
           <tr>
             <th>Amaliyot o'tkazilgan sana</th>
             <th>Soat</th>
             <th>Mashg'ulot mavzusi</th>
             <th>Amaliyot o'tkazish joyi</th>
             <th>Amaliyot rahbarining imzosi</th>
           </tr>
           <tr align='center'>
             <td>31.01.2022</td>
             <td>6</td>
             <td>Kirish chilangarlik ishi turlari, elektr va yong'in havsizlik qoidalari</td>
             <td>Amaliyot ustaxonasida</td>
             <td></td>
           </tr>
           <tr align='center'>
             <td>31.01.2022</td>
             <td>6</td>
             <td>Kirish chilangarlik ishi turlari, elektr va yong'in havsizlik qoidalari</td>
             <td>Amaliyot ustaxonasida</td>
             <td></td>
           </tr>
           <tr align='center'>
             <td>31.01.2022</td>
             <td>6</td>
             <td>Kirish chilangarlik ishi turlari, elektr va yong'in havsizlik qoidalari</td>
             <td>Amaliyot ustaxonasida</td>
             <td></td>
           </tr>
           <tr align='center'>
             <td>31.01.2022</td>
             <td>6</td>
             <td>Kirish chilangarlik ishi turlari, elektr va yong'in havsizlik qoidalari</td>
             <td>Amaliyot ustaxonasida</td>
             <td></td>
           </tr>
         </table>
      </Grid>
    </Grid>
  )
}

export default Shakl6_1