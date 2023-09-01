import React, { useState } from "react";
import { jobs_data } from "../../data/jobs";
import { convertTime, numberFormat } from "../../helpers/general";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TablePagination } from "@mui/material";

const CompanyJobs = () => {
  function createData(role, no_of_applicants, created_at, expiry_date) {
    return { role, no_of_applicants, created_at, expiry_date };
  }

  const column = [
    {
      name: "Role",
    },
    {
      name: "No. of applicants",
    },
    {
      name: "Date created",
    },
    {
      name: "Expiry date",
    },
    {
      name: "Action",
    },
  ];

  const rows = jobs_data.map((job) =>
    createData(job.role, job.no_of_applicants, job.created_at, job.expiry_date)
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="width90">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "70vh" }}>
          <Table
            sx={{ minWidth: "100%" }}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                {column.map((each, index) => (
                  <TableCell
                    key={index}
                    className="mainBackground"
                    style={{ color: "#fff", background: "#151a23" }}
                  >
                    {each.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    className="primaryColor"
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      style={{ color: "#fff" }}
                      component="th"
                      scope="row"
                    >
                      {row.role}
                    </TableCell>
                    <TableCell style={{ color: "#fff" }} align="right">
                      {numberFormat(row.no_of_applicants)}
                    </TableCell>
                    <TableCell style={{ color: "#fff" }} align="right">
                      {convertTime(row.created_at)}
                    </TableCell>
                    <TableCell style={{ color: "#fff" }} align="right">
                      {convertTime(row.expiry_date)}
                    </TableCell>
                    <TableCell style={{ color: "#fff" }} align="right">
                      <Button variant="contained">Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className="primaryColor"
          style={{ color: "#fff" }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default CompanyJobs;
