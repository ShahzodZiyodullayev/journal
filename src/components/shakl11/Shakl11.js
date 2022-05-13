import React from 'react';
import {Grid} from '@mui/material';
import userData from './userData11';

const Shakl11 = () => {
    return (
        <Grid container>
           <Grid lg={12} textAlign="center" padding={3} marginTop={1}>
             <h2 style={{color:"#0288D1"}}>__________KVALIFIKATSIYA BO'YICHA AMALIY IMTIHON (TAQDIMOT) NATIJALARI</h2>
           </Grid>
           <Grid lg={12} className="shakl6_1" align="center" marginBottom={4}>
           <table>
             <tr align="center">
                 <th width={"5%"}>T/r</th>
                 <th width={"25%"}>O'quvchilarning familiyasi va ismi</th>
                 <td width={"30%"}><b>Kasblar bo'yicha amaliy imtihon(taqdimot)dan olgan ball</b></td>
                 <td><b>DAKning xulosasi</b></td>
             </tr>
             {
               userData.map(item => (
                 <tr align="center" key={item.id}>
                    <td>{item.id}</td>
                    <td align="left">{item.name}</td>
                    <td>{item.kasblar}</td>
                    <td>{item.xulosa}</td>
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

export default Shakl11;