import React from 'react';
import {Grid} from '@mui/material';
import userData from '../shakl13/userData13';

const Shakl14ex = (props) => {
    return (
        <Grid container>
          <Grid lg={12} textAlign="center" padding={2} marginTop={1}>
            <h2 style={{color:"#0288D1"}}>O'quvchilar tomonidan qoldirilgan dars soatlari 2021/2022 o'quv yilining {props.semestr}-semestrda soatlar hisobi</h2>
          </Grid>
          <Grid lg={12} className="shakl6_1" align="center">
           <table>
             <tr align='center'>
              <th rowSpan={2}>T/r</th>
              <th rowSpan={2}>O'quvchilarning familiyasi va ismi</th>
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
              <td colSpan={3}>Hammasi bo'lib</td>
             </tr>
             <tr>
                 <td style={{writingMode:"vertical-lr"}}>Sababli</td>
                 <td style={{writingMode:"vertical-lr"}}>Sababsiz</td>
                 <td style={{writingMode:"vertical-lr"}}>Jami</td>
                 <td style={{writingMode:"vertical-lr"}}>Sababli</td>
                 <td style={{writingMode:"vertical-lr"}}>Sababsiz</td>
                 <td style={{writingMode:"vertical-lr"}}>Jami</td>
                 <td style={{writingMode:"vertical-lr"}}>Sababli</td>
                 <td style={{writingMode:"vertical-lr"}}>Sababsiz</td>
                 <td style={{writingMode:"vertical-lr"}}>Jami</td>
                 <td style={{writingMode:"vertical-lr"}}>Sababli</td>
                 <td style={{writingMode:"vertical-lr"}}>Sababsiz</td>
                 <td style={{writingMode:"vertical-lr"}}>Jami</td>
                 <td style={{writingMode:"vertical-lr"}}>Sababli</td>
                 <td style={{writingMode:"vertical-lr"}}>Sababsiz</td>
                 <td style={{writingMode:"vertical-lr"}}>Jami</td>
                 <td style={{writingMode:"vertical-lr"}}>Sababli</td>
                 <td style={{writingMode:"vertical-lr"}}>Sababsiz</td>
                 <td style={{writingMode:"vertical-lr"}}>Jami</td>
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
    </Grid>
    );
};

export default Shakl14ex;