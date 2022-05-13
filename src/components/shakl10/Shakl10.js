import React from 'react';
import {Grid} from '@mui/material';
import userData from './UserData10';

const Shakl10 = () => {
    return (
        <Grid container>
           <Grid lg={12} textAlign="center" padding={3} marginTop={1}>
             <h2 style={{color:"#0288D1"}}>_______FAN (MODUL)DAN YAKUNIY ATTESTATSIYA NATIJALARI</h2>
           </Grid>
           <Grid lg={12} className="shakl6_1" align="center" marginBottom={4}>
           <table>
             <tr align="center">
                 <th>T/r</th>
                 <th>O'quvchilarning familiyasi va ismi</th>
                 <td><b>Sana</b></td>
                 <td><b>Bilet(variant) T/r</b></td>
                 <td><b>Olgan ball(raqam va so'z bilan)</b></td>
                 <td><b>Izoh</b></td>
             </tr>
             {
               userData.map(item => (
                 <tr align="center" key={item.id}>
                    <td>{item.id}</td>
                    <td align="left">{item.name}</td>
                    <td>{item.sana}</td>
                    <td>{item.bilet}</td>
                    <td>{item.ball}</td>
                    <td>{item.izoh}</td>
                 </tr>
               ))
             }
          </table>
        </Grid>
        <Grid lg={12} padding={3}>
             <h3 style={{textDecoration:'underline'}}>Davlat attestatsiya komissiyasi raisi:</h3>
        </Grid>
        <Grid lg={12} padding={3}>
             <h3 style={{textDecoration:'underline'}}>Davlat attestatsiya komissiyasi a'zolari:</h3>
        </Grid>
     </Grid>
    );
};

export default Shakl10;