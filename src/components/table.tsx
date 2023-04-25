import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MainPageData } from "../interface";
import { useSelector } from "react-redux";

export default function TableMUI() {
  const data = useSelector((state: any) => state.data.mainData);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Causes</TableCell>
            <TableCell align="center">Payment Type</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Main type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data: MainPageData) => (
            <TableRow
              key={data.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.name}
              </TableCell>
              <TableCell align="center">{`${data.amount.toLocaleString(
                "UZ-uz"
              )} sum`}</TableCell>
              <TableCell align="center">{data.causes}</TableCell>
              <TableCell align="center">{data.paymentType}</TableCell>
              <TableCell align="center">{data.date}</TableCell>
              <TableCell
                style={{
                  color: data.type === "Kirim" ? "lightGreen" : "red",
                  fontSize: 16,
                }}
                align="center"
              >
                {data.type}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
