const TambahSiswa = [
  "Nama", //
  "Email",
  "NISN",
  "Jurusan",
  "Kelas",
  "Tempat, Tanggal Lahir",
  "No. Telepon",
  "Alamat",
  "Agama",
  "Golongan Darah",
  "Jenis Kelamin",
  "Password",
  "Confirm Password",
];

const TambahGuru = [
  "Nama", //
  "Email",
  "NIP",
  "Pendidikan (Gelar)",
  "Mata Pelajaran yang Diampu",
  "Tempat, Tanggal Lahir",
  "No. Telepon",
  "Alamat",
  "Jenis Kelamin",
  "Password",
  "Confirm Password",
];

const JudulForm = [{ label: "Judul", name: "judul_pengumuman" }];

const DeskripsiForm = [{ label: "Deskripsi", name: "isi_pengumuman" }];

const JudulBeritaForm = [{ label: "Judul", name: "judul_berita" }];
const DeskripsiBeritaForm = [{ label: "Deskripsi", name: "isi_berita" }];

export default TambahSiswa;
export {
  TambahGuru,
  JudulForm,
  DeskripsiForm,
  JudulBeritaForm,
  DeskripsiBeritaForm,
};
