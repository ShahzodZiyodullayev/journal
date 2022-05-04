
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
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
            <StyledTableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': {border:0 } }}
            >
              <StyledTableCell align="center">{item.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{item.fanNomi}</StyledTableCell>
              <StyledTableCell align="center">{item.semestr1}</StyledTableCell>
              <StyledTableCell align="center">{item.semestr2}</StyledTableCell>
              <StyledTableCell align="center">{item.oqituvchiIsmi}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default DarsTaqsimlanishi;