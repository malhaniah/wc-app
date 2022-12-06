import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  tableCellClasses
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { StandingsResponseTypes } from "../types";

interface children {
  standing: any;
}

const Tables = ({ standing }: children) => {


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "var(--primary-color)",
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

  return (
    <>
      <TableContainer sx={{ maxWidth: 800 }} component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead >
          <TableRow>
              <TableCell align="center" colSpan={10} style={{background: "var(--primary-color)", color: "#fff", fontSize: "150%"}}>
                {standing.group}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <StyledTableCell>Flag</StyledTableCell>
              <StyledTableCell>Team</StyledTableCell>
              <StyledTableCell align="left">Points</StyledTableCell>
              <StyledTableCell align="left">Wins</StyledTableCell>
              <StyledTableCell align="left">Loses</StyledTableCell>
              <StyledTableCell align="left">Draws</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {standing.table.map((row: any) => {
              return (
                <StyledTableRow key={row.team.id}>
                  <StyledTableCell  align="right">
                    <Avatar src={row.team.crest} />
                  </StyledTableCell>
                  <TableCell component="th" scope="row">
                    {row.team.name}
                  </TableCell>
                  <TableCell align="left">{row.points}</TableCell>
                  <TableCell align="left">{row.won}</TableCell>
                  <TableCell align="left">{row.lost}</TableCell>
                  <TableCell align="left">{row.draw}</TableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tables;
