import React from 'react';
import {Grid} from '@mui/material';
import userData from "./dataUser15";

const Shakl15 = () => {
    return (
        <Grid container>
           <Grid lg={12} textAlign="center" padding={3} marginTop={1}>
              <h2 style={{color:"#0288D1"}}>Jurnarlning yuritishi yuzasidan nazoratchilar tomonidan bildirilgan kamchiliklar va takliflar</h2>
           </Grid>
           <Grid lg={12} className="shakl6_1" align="center" marginBottom={4}>
           <table>
             <tr align="center">
                 <th>Sana</th>
                 <th>Kamchiliklar, izoh va takliflar (qisqacha, aniq yoziladi)</th>
                 <th>Muddati</th>
                 <th>Ma'sul shaxsning familiyasi va ismi, lavozimi va imzosi</th>
             </tr>
             {
               userData.map(item => (
                 <tr align="center" key={item.id}>
                    <td>{item.sana}</td>
                    <td>{item.kamchiliklar}</td>
                    <td>{item.muddati}</td>
                    <td>{item.ism}</td>
                 </tr>
               ))
             }
          </table>
        </Grid>
     </Grid>
    );
};

export default Shakl15;