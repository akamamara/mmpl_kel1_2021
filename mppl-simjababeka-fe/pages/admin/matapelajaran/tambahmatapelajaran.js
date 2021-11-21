import AdminLayout from "@/layouts/AdminLayout";
import FormMataPelajaran from "@/sections/form/FormMataPelajaran";
import * as React from "react";
import { TingkatList, JurusanList } from "@/utils/list/SelectList";

const TambahMataPelajaran = () => {
  const [result, setResult] = React.useState([]);
  const [kelas, setKelas] = React.useState("");
  const [jurusan, setJurusan] = React.useState("");

  const handleKelas = {
    handleChange: (event) => {
      setKelas(event.target.value);
      setResult({ ...result, ["Kelas"]: event.target.value });
    },
    checkValue: () => {
      return kelas;
    },
    checkData: () => {
      return TingkatList;
    },
  };

  const handleJurusan = {
    handleChange: (event) => {
      setJurusan(event.target.value);
      setResult({ ...result, ["Jurusan"]: event.target.value });
    },
    checkValue: () => {
      return jurusan;
    },
    checkData: () => {
      return JurusanList;
    },
  };

  return (
    <>
      <FormMataPelajaran
        handleKelas={handleKelas}
        handleJurusan={handleJurusan}
      />
    </>
  );
};

TambahMataPelajaran.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahMataPelajaran;
