import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "left",
  color: theme.palette.text.primary
}));

const user = [
  {
    namaAyah: "Unknown",
    namaIbu: "Unknown",
    noTelpAyah: "Unknown",
    noTelpIbu: "Unknown",
    alamatAyah: "unknown",
    alamatIbu: "Unknown",
    pekerjaanAyah: "Unknown",
    pekerjaanIbu: "Unknown"
  }
];

export default function BiodataOrangTua() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={8} md={6}>
          <Item>Nama Ayah</Item>
          <Item>{user[0].namaAyah}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>Nama Ibu</Item>
          <Item>{user[0].namaIbu}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>No. Telepon</Item>
          <Item>{user[0].noTelpAyah}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>No. Telepon</Item>
          <Item>{user[0].noTelpIbu}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>Alamat</Item>
          <Item>{user[0].alamatAyah}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>Alamat</Item>
          <Item>{user[0].alamatIbu}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>Pekerjaan</Item>
          <Item>{user[0].pekerjaanAyah}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>Pekerjaan</Item>
          <Item>{user[0].pekerjaanIbu}</Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
