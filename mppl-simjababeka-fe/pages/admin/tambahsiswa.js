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
  const [result, setResult] = React.useState([]);
  const [agama, setAgama] = React.useState("");
  const [golonganDarah, setGolonganDarah] = React.useState("");
  const [jenisKelamin, setJenisKelamin] = React.useState("");

  const handleChange = (event, title) => {
    if (title === "Agama") {
      setAgama(event.target.value);
      setResult({ ...result, [title]: event.target.value });
    } else if (title === "Golongan Darah") {
      setGolonganDarah(event.target.value);
      setResult({ ...result, [title]: event.target.value });
    } else if (title === "Jenis Kelamin") {
      setResult({ ...result, [title]: event.target.value });
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

  const handleInput = (e) => {
    setResult({ ...result, [e.target.name]: e.target.value });
  };

  const handleSimpan = () => {
    if (
      result["Nama"] &&
      result["Email"] &&
      result["NISN"] &&
      result["Jurusan"] &&
      result["Kelas"] &&
      result["Tempat, Tanggal Lahir"] &&
      result["No. Telepon"] &&
      result["Alamat"] &&
      result["Agama"] &&
      result["Golongan Darah"] &&
      result["Jenis Kelamin"] &&
      result["Password"] &&
      result["Confirm Password"]
    ) {
      const simpan = {
        nama: result["Nama"],
        email: result["Email"],
        nisn: result["NISN"],
        jurusan: result["Jurusan"],
        kelas: result["Kelas"],
        ttl: result["Tempat, Tanggal Lahir"],
        noTelp: result["No. Telepon"],
        alamat: result["Alamat"],
        agama: result["Agama"],
        goldar: result["Golongan Darah"],
        jk: result["Jenis Kelamin"],
        password: result["Password"],
        password2: result["Confirm Password"],
      };
      console.log(simpan);
    } else {
      console.log("Isi formnya ya");
    }
  };

  return (
    <>
      <Heading3 sx={{ mb: 1 }}>Tambah Siswa Baru</Heading3>
      <FormTambahSiswa
        handleChange={handleChange}
        checkValue={checkValue}
        checkData={checkData}
        handleInput={handleInput}
        handleSimpan={handleSimpan}
      />
    </>
  );
};

TambahSiswaPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahSiswaPage;
