
import React from 'react';

import {TableContainer, Paper, Table, styled, TableBody, TableCell, tableCellClasses, TableHead, TableRow } from '@mui/material';
import userData from './DarsInfo';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const DarsTaqsimlanishi = () => {
    return (  
        <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
          <TableRow>
            <StyledTableCell >T/r</StyledTableCell>
            <StyledTableCell>Fan (modul) nomi</StyledTableCell>
            <StyledTableCell align="center">Dars soatlari(semestr-1)</StyledTableCell>
            <StyledTableCell align="center">Dars soatlari(semestr-2)</StyledTableCell>
            <StyledTableCell align="center">O'qituvchining familiyasi va ismi</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': {border:0 } }}
            >
              <TableCell align="center">{item.id}</TableCell>
              <TableCell component="th" scope="row">{item.fanNomi}</TableCell>
              <TableCell align="center">{item.semestr1}</TableCell>
              <TableCell align="center">{item.semestr2}</TableCell>
              <TableCell align="center">{item.oqituvchiIsmi}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default DarsTaqsimlanishi;