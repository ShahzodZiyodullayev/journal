import React from 'react';
import Grid from '@mui/material/Grid';
import {TableContainer, Paper, Table, styled, TableBody, TableCell, tableCellClasses, TableHead, TableRow } from '@mui/material';
import oquvchilar from './Oquvchilar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
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


function Shakl3() {
  return (
    <Grid container>
        <Grid lg={12} sx={12}  textAlign='center' padding={2} marginBottom={2}>
          <h2 style={{color:'#0288D1'}}>O'QUVCHILAR HAQIDA MA'LUMOT</h2>
        </Grid>
        <Grid lg={12}>
        <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
          <TableRow>
            <StyledTableCell >T/r</StyledTableCell>
            <StyledTableCell>O'quvchining familiyasi va ismi</StyledTableCell>
            <StyledTableCell align="center">Tug'olgan kuni, oyi, yili </StyledTableCell>
            <StyledTableCell align="center">Ta'lim muassasasiga qabul qilinganlik yoki kursdan o'tganlik to'g'risida buyruq</StyledTableCell>
            <StyledTableCell align="center">Qo'shimcha ma'lumot</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {oquvchilar.map((item) => (
            <StyledTableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': {border:0 } }}
            > 
              <StyledTableCell align="center">{item.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{item.name}</StyledTableCell>
              <StyledTableCell align="center">{item.tugilganSana}</StyledTableCell>
              <StyledTableCell align="center">{item.talimMuassasi}</StyledTableCell>
              <StyledTableCell align="center">{item.qoshimchaMalumot}</StyledTableCell>
            </StyledTableRow> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
    </Grid>
  )
}

export default Shakl3