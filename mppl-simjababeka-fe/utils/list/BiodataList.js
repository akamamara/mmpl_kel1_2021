import { TingkatList, JurusanList } from "./SelectList";

// Real data
export const ProfilGuruLabel = [
	{ label: "Foto", name: "foto_guru", type: "file", accept: "image/*" },
	{ label: "ID Guru", name: "email_guru", type: "email" },
	{ label: "Nama", name: "nama_guru" },
	{ label: "NIP", name: "nip" },
	{ label: "Pendidikan", name: "pendidikan" },
	{ label: "Tanggal Lahir", name: "tanggal_lahir", type: "date" },
	{ label: "Tempat Lahir", name: "tempat_lahir" },
	{ label: "Mata Pelajaran", name: "mapel_id" },
	{ label: "No. Telepon", name: "no_telp", type: "tel" },
];

export const ProfilSiswaLabel = [
	{ label: "Foto", name: "foto_siswa", type: "file", accept: "image/*" },
	{ label: "ID Siswa", name: "email_siswa", type: "email" },
	{ label: "Nama", name: "nama_siswa" },
	{ label: "NISN", name: "nisn" },
	{ label: "Jurusan", name: "jurusan", type: "selection", data: JurusanList },
	{ label: "Kelas", name: "kelas", type: "selection", data: TingkatList },
	{ label: "Tempat Lahir", name: "tempat_lahir" },
	{ label: "Tanggal Lahir", name: "tanggal_lahir", type: "date" },
	{ label: "No. Telepon", name: "no_telp", type: "tel" },
];

export const registerValue = [
	{ label: "E-mail", name: "email", type: "email" },
	{ label: "Password", name: "password", type: "password" },
	{ label: "Re-Password", name: "password2", type: "password" },
];

// Dummy data
const DataPribadiLabel = [
	"Nama", //
	"NISN",
	"Email",
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
		email: "raidenbaal@gmail.com",
		jenisKelamin: "Perempuan",
		jurusan: "teknik elektro",
		ttl: "Inazuma",
		alamat: "inazuma city",
		agama: "shinto",
		noTelp: "032141234124",
		goldar: "-",
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
		namaAyah: "**Future improvement**",
		namaIbu: "**Future improvement**",
		noTelpAyah: "**Future improvement**",
		noTelpIbu: "**Future improvement**",
		alamatAyah: "**Future improvement**",
		alamatIbu: "**Future improvement**",
		pekerjaanAyah: "**Future improvement**",
		pekerjaanIbu: "**Future improvement**",
	},
];

export default DataPribadiLabel;
export { DataPribadi, DataOrangTuaLabel, DataOrangTua };
