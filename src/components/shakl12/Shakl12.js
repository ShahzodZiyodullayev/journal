import React from 'react';
import {Grid} from '@mui/material';
import userData from './userData12';

const Shakl12 = () => {
    return (
        <Grid container>
           <Grid lg={12} textAlign="center" padding={3} marginTop={1}>
             <h2 style={{color:"#0288D1"}}>O'QUVCHILAR O'ZLASHTIRISH KO'RSATKICHLARINING FANLAR BO'YICHA YAKUNIY YIG'MA QAYDNOMASI</h2>
           </Grid>
           <Grid lg={12} className="shakl6_1" align="center" marginBottom={4}>
           <table>
             <tr align="center">
                 <th rowSpan={3}>T/r</th>
                 <th>Fanlar nomi</th>
                 <td colSpan={3}><b></b></td>
                 <td colSpan={3}><b></b></td>
             </tr>
             <tr>
                 <th>O'qituvchining familiyasi va ismi</th>
                 <td colSpan={3}><b></b></td>  
                 <td colSpan={3}><b></b></td>  
             </tr>
             <tr>
                 <th>O'quvchilarning familiyasi va ismi</th>
                 <td><b>I-semestr</b></td>
                 <td><b>II-semestr</b></td>
                 <td><b>Yakuniy ball</b></td>
                 <td><b>I-semestr</b></td>
                 <td><b>II-semestr</b></td>
                 <td><b>Yakuniy ball</b></td>
             </tr>
             {
               userData.map(item => (
                 <tr align="center" key={item.id}>
                    <td>{item.id}</td>
                    <td align="left">{item.name}</td>
                    <td>{item.semestr1}</td>
                    <td>{item.semestr2}</td>
                    <td>{item.yakuniyBall}</td>
                    <td>{item.semestr3}</td>
                    <td>{item.semestr4}</td>
                    <td>{item.yakuniyBall2}</td>
                 </tr>
               ))
             }
          </table>
        </Grid>
     </Grid>
    );
};

export default Shakl12;