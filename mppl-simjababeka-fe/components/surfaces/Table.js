import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Subtitle2 } from "../typography/Heading";

export default function DenseTable({ record, variable, actionable = false }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {variable.map((item, index) => (
              <TableCell key={index}>
                <Subtitle2>{item}</Subtitle2>
              </TableCell>
            ))}
            {actionable ? (
              <TableCell>
                <Subtitle2>Actions</Subtitle2>
              </TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {record.map(Object.values).map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Subtitle2>{index + 1}</Subtitle2>
              </TableCell>
              {row.map((item, idx) => (
                <TableCell key={idx}>
                  <Subtitle2>{item}</Subtitle2>
                </TableCell>
              ))}
              {actionable ? (
                <TableCell>
                  <button>Edit</button>
                  <button>Hapus</button>
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
