const DataPribadiLabel = [
  "Nama", //
  "NISN",
  "Jenis Kelamin",
  "Jurusan",
  "Tempat, Tanggal Lahir",
  "Alamat",
  "Agama",
  "No. Telepon",
  "Golongan Darah",
];

// Kalo responsenya urutannya harus kyk dibawah biar bener pas diformnya
const DataPribadi = [
  {
    nama: "Raiden Ei",
    nisn: "g6142144124",
    jenisKelamin: "Perempuan",
    jurusan: "teknik elektro",
    ttl: "Inazuma",
    alamat: "inazuma city",
    agama: "shinto",
    goldar: "-",
    noTelp: "032141234124",
  },
];

const DataOrangTuaLabel = [
  "Nama Ayah", //
  "Nama Ibu",
  "No. Telepon",
  "No. Telepon",
  "Alamat",
  "Alamat",
  "Pekerjaan",
  "Pekerjaan",
];

const DataOrangTua = [
  {
    namaAyah: "Unknown",
    namaIbu: "Unknown",
    noTelpAyah: "ELEG",
    noTelpIbu: "Unknown",
    alamatAyah: "Lul",
    alamatIbu: "Unknown",
    pekerjaanAyah: "4Head",
    pekerjaanIbu: "Unknown",
  },
];

export default DataPribadiLabel;
export { DataPribadi, DataOrangTuaLabel, DataOrangTua };
