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

const GaleriForm = [
  { label: "Nama Galeri", name: "nama_galeri" }, //
  { label: "Keterangan Galeri", name: "keterangan_galeri" },
  {
    label: "Sampul",
    name: "sampul_galeri",
    type: "file",
    accept: "image/*",
    multiple: false,
  },
];

const PhotosForm = [
  { label: "Nama Gambar", name: "nama_gambar" }, //
  {
    label: "Gambar",
    label: "gambar_galeri",
    type: "file",
    accept: "image/*",
    multiple: true,
  },
];

export default TambahSiswa;
export {
  TambahGuru,
  JudulForm,
  DeskripsiForm,
  JudulBeritaForm,
  DeskripsiBeritaForm,
  GaleriForm,
  PhotosForm,
};
