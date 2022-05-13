import React from 'react';
import {Grid} from '@mui/material';
import userData from './userData13';

const Shakl13 = () => {
    return (
        <Grid container>
          <Grid lg={12} textAlign="center" padding={2} marginTop={1}>
            <h2 style={{color:"#0288D1"}}>BITIRUV MALAKAVIY (DIPLOM) ISHINING HIMOYASI NATIJASI</h2>
          </Grid>
          <Grid lg={12} padding={5}>
            <h3 style={{textDecoration:'underline'}}>Kasb(mutaxassislik) nomi: </h3>
          </Grid>
          <Grid lg={12} className="shakl6_1" align="center">
           <table>
             <tr align='center'>
              <th>T/r</th>
              <th>O'quvchilarning familiyasi va ismi</th>
              <td width={"40%"}><b>Bitiruv malakaviy (diplom) ishi mavzusi</b></td>
              <td><b>Himoya sanasi</b></td>
              <td><b>Himoya bali(raqam va so'z bilan)</b></td>
              <td><b>DAKning xulosasi</b></td>
             </tr>
             {
               userData.map(item => (
                 <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.mavzu}</td>
                    <td>{item.sana}</td>
                    <td>{item.ball}</td>
                    <td>{item.xulosa}</td>
                 </tr>
               ))
             }
        </table>
      </Grid>
    </Grid>
    );
};

export default Shakl13;