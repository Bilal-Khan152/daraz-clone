// Paginations.jsx
import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Paginations({
  totalProducts,
  productsPerPage,
  page,
  setPage,
}) {
  const pageCount = Math.ceil(totalProducts / productsPerPage);

  return (
    <Stack spacing={2}>
      <Pagination
        count={pageCount}
        page={page}
        onChange={(e, value) => setPage(value)}
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            borderRadius: "4px",
            color: "black",
            border: "1px solid gray",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#1A9CB7",
              border: "1px solid #1A9CB7",
            },
          },
          "& .Mui-selected": {
            backgroundColor: "#1A9CB7 !important",
            color: "#fff !important",
            border: "1px solid #1A9CB7",
            "&:hover": {
              backgroundColor: "#fff !important",
              color: "black !important",  
              border: "1px solid #1A9CB7",
            },
          },

          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
      />
    </Stack>
  );
}
