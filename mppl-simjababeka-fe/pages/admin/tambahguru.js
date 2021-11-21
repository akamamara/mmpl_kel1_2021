import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import { Heading3 } from "@/components/typography/Heading";
import {
  AgamaList,
  GolonganDarahList,
  JenisKelaminList,
} from "@/utils/list/SelectList";
import FormTambahGuru from "@/sections/form/FormTambahGuru";

const TambahGuruPage = () => {
  const [result, setResult] = React.useState([]);
  const [jenisKelamin, setJenisKelamin] = React.useState("");

  const handleChange = (event, title) => {
    if (title === "Jenis Kelamin") {
      setJenisKelamin(event.target.value);
      setResult({ ...result, ["Jenis Kelamin"]: event.target.value });
    }
  };

  const checkValue = (title) => {
    if (title === "Jenis Kelamin") {
      return jenisKelamin;
    }
  };

  const checkData = (title) => {
    if (title === "Jenis Kelamin") {
      return JenisKelaminList;
    }
  };

  const handleCheckbox = (e, value) => {
    console.log(value);
    setResult({ ...result, ["Mata Pelajaran yang Diampu"]: value });
  };

  const handleInput = (e) => {
    setResult({ ...result, [e.target.name]: e.target.value });
  };

  const handleSimpan = () => {
    console.log(result);
  };

  return (
    <>
      <Heading3 sx={{ mb: 1 }}>Tambah Guru Baru</Heading3>
      <FormTambahGuru
        handleChange={handleChange}
        checkValue={checkValue}
        checkData={checkData}
        handleCheckbox={handleCheckbox}
        handleInput={handleInput}
        handleSimpan={handleSimpan}
      />
    </>
  );
};

TambahGuruPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahGuruPage;
