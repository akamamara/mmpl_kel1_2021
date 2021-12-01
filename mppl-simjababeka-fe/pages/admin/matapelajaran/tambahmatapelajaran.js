import AdminLayout from "@/layouts/AdminLayout";
import FormMataPelajaran from "@/sections/form/FormMataPelajaran";
import * as React from "react";
import { TingkatList, JurusanList } from "@/utils/list/SelectList";

import { postMataPelajaran } from "@/utils/api/mapel";

const TambahMataPelajaran = () => {
  const [result, setResult] = React.useState([]);
  const [kelas, setKelas] = React.useState("");
  const [jurusan, setJurusan] = React.useState("");
  const [namaMapel, setNamaMapel] = React.useState("");

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

  const handleNamaMapel = {
    handleInput: (event) => {
      setNamaMapel(event.target.value);
      setResult({ ...result, [event.target.name]: event.target.value });
    },
    checkValue: () => {
      return namaMapel;
    },
  };

  const handleSimpan = () => {
    console.log(
      JSON.parse(JSON.parse(localStorage.getItem("persist:jababeka:root")).user)
        .role.user_type
    );
    const simpan = {
      nama_mapel: result["Judul"],
      kelas: result["Kelas"],
      jurusan: result["Jurusan"],
    };
    postMataPelajaran(simpan);
    setResult([]);
    setNamaMapel("");
    setJurusan("");
    setKelas("");
  };

  return (
    <>
      <FormMataPelajaran
        handleKelas={handleKelas}
        handleJurusan={handleJurusan}
        handleNamaMapel={handleNamaMapel}
        handleSimpan={handleSimpan}
      />
    </>
  );
};

TambahMataPelajaran.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahMataPelajaran;
