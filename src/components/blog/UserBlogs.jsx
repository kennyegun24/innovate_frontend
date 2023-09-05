import React from "react";
import { allArticles } from "../../data/articles";
import { convertTime, numberFormat } from "../../helpers/general";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const UserBlogs = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "title",
      headerName: "Title",
      width: 250,
      renderCell: (params) => {
        return (
          <Link
            style={{}}
            className="decoration_underline blue"
            to={`/blog/${params.id}`}
          >
            {params.value.length >= 20
              ? params.value.slice(0, 20) + "..."
              : params.value}
          </Link>
        );
      },
    },
    {
      field: "created_at",
      headerName: "Created",
      width: 150,
      renderCell: (params) => {
        return <span>{convertTime(params.value)}</span>;
      },
    },
    {
      field: "likes_counter",
      headerName: "Likes",
      width: 150,
      renderCell: (params) => {
        return <span>{numberFormat(params.value)}</span>;
      },
    },
    {
      field: "comments_counter",
      headerName: "Comments",
      width: 150,
      renderCell: (params) => {
        return <span>{numberFormat(params.value)}</span>;
      },
    },
    {
      headerName: "Action",
      width: 150,
      renderCell: () => {
        return <Button variant="contained">Delete</Button>;
      },
    },
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h2
        style={{
          width: "100%",
          padding: "0.5rem",
          fontFamily: "sans-serif",
          fontSize: "1.5rem",
          textAlign: "center",
          color: "#fff",
        }}
      >
        All Articles
      </h2>
      <Box sx={{ height: "90%", width: "100%" }}>
        <DataGrid
          sx={{ color: "#fff" }}
          rows={allArticles
            .map((hey) => ({ ...hey, value: hey.price * hey.in_stock }))
            .sort((a, b) => a.id - b.id)}
          columns={columns}
          slotProps={{
            pagination: {
              className: "blue",
              style: {
                color: "#fff",
              },
            },
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 20,
              },
              color: "#fff",
            },
          }}
          pagina
          pageSizeOptions={[5]}
        />
      </Box>
    </div>
  );
};

export default UserBlogs;
