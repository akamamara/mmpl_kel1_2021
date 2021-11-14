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
    nama: "Raiden Ei",
    jenisKelamin: "Perempuan",
    ttl: "Inazuma",
    agama: "shinto",
    goldar: "-",
    nisn: "g6142144124",
    jurusan: "teknik elektro",
    alamat: "inazuma city",
    noTelp: "032141234124"
  }
];

export default function BiodataPribadi() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={8} md={6}>
          <Item>Nama</Item>
          <Item>{user[0].nama}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>NISN</Item>
          <Item>{user[0].nisn}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>Jenis Kelamain</Item>
          <Item>{user[0].jenisKelamin}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>Jurusan</Item>
          <Item>{user[0].jurusan}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>Tempat, Tanggal Lahir</Item>
          <Item>{user[0].ttl}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>Alamat</Item>
          <Item>{user[0].alamat}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>Agama</Item>
          <Item>{user[0].agama}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>No. Telepon</Item>
          <Item>{user[0].noTelp}</Item>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Item>Golongan Darah</Item>
          <Item>{user[0].goldar}</Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
