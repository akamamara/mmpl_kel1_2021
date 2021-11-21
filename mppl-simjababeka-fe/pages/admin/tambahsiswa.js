import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import { Heading3, Subtitle2 } from "@/components/typography/Heading";
import {
  AgamaList,
  GolonganDarahList,
  JenisKelaminList,
} from "@/utils/list/SelectList";
import FormTambahSiswa from "@/sections/form/FormTambahSiswa";

const TambahSiswaPage = () => {
  const [agama, setAgama] = React.useState("");
  const [golonganDarah, setGolonganDarah] = React.useState("");
  const [jenisKelamin, setJenisKelamin] = React.useState("");

  const handleChange = (event, title) => {
    if (title === "Agama") {
      setAgama(event.target.value);
    } else if (title === "Golongan Darah") {
      setGolonganDarah(event.target.value);
    } else if (title === "Jenis Kelamin") {
      setJenisKelamin(event.target.value);
    }
  };

  const checkValue = (title) => {
    if (title === "Agama") {
      return agama;
    } else if (title === "Golongan Darah") {
      return golonganDarah;
    } else if (title === "Jenis Kelamin") {
      return jenisKelamin;
    }
  };

  const checkData = (title) => {
    if (title === "Agama") {
      return AgamaList;
    } else if (title === "Golongan Darah") {
      return GolonganDarahList;
    } else if (title === "Jenis Kelamin") {
      return JenisKelaminList;
    }
  };

  return (
    <>
      <Heading3 sx={{ mb: 1 }}>Tambah Siswa Baru</Heading3>
      <FormTambahSiswa
        handleChange={handleChange}
        checkValue={checkValue}
        checkData={checkData}
      />
    </>
  );
};

TambahSiswaPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahSiswaPage;
