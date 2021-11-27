import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import Biodata from "@/sections/biodata/Biodata";
import Container from "@/components/surfaces/Container";
import {
  AgamaList,
  GolonganDarahList,
  JenisKelaminList,
  TingkatList,
  JurusanList,
} from "@/utils/list/SelectList";

const ProfilPage = () => {
  const [open, setOpen] = React.useState(false);
  const [result, setResult] = React.useState([]);
  const [agama, setAgama] = React.useState("");
  const [golonganDarah, setGolonganDarah] = React.useState("");
  const [jenisKelamin, setJenisKelamin] = React.useState("");
  const [jurusan, setJurusan] = React.useState("");
  const [tingkat, setTingkat] = React.useState("");

  const dialogHandler = {
    handleClickOpen: () => {
      setOpen(true);
    },

    handleClose: () => {
      setOpen(false);
    },

    handleChange: (event, title) => {
      if (title === "Agama") {
        setAgama(event.target.value);
        setResult({ ...result, [title]: event.target.value });
      } else if (title === "Golongan Darah") {
        setGolonganDarah(event.target.value);
        setResult({ ...result, [title]: event.target.value });
      } else if (title === "Jenis Kelamin") {
        setResult({ ...result, [title]: event.target.value });
        setJenisKelamin(event.target.value);
      } else if (title === "Kelas") {
        setResult({ ...result, [title]: event.target.value });
        setTingkat(event.target.value);
      } else if (title === "Jurusan") {
        setResult({ ...result, [title]: event.target.value });
        setJurusan(event.target.value);
      }
    },

    checkValue: (title) => {
      if (title === "Agama") {
        return agama;
      } else if (title === "Golongan Darah") {
        return golonganDarah;
      } else if (title === "Jenis Kelamin") {
        return jenisKelamin;
      } else if (title === "Kelas") {
        return tingkat;
      } else if (title === "Jurusan") {
        return jurusan;
      }
    },

    checkData: (title) => {
      if (title === "Agama") {
        return AgamaList;
      } else if (title === "Golongan Darah") {
        return GolonganDarahList;
      } else if (title === "Jenis Kelamin") {
        return JenisKelaminList;
      } else if (title === "Kelas") {
        return TingkatList;
      } else if (title === "Jurusan") {
        return JurusanList;
      }
    },

    handleInput: (e) => {
      setResult({ ...result, [e.target.name]: e.target.value });
    },
  };

  return (
    <>
      <Container>
        <Biodata dialogHandler={dialogHandler} open={open} />
      </Container>
    </>
  );
};

ProfilPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default ProfilPage;
