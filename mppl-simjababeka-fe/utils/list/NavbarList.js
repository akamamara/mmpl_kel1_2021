const NavbarList = [
  "Beranda",
  "Informasi",
  "Galeri",
  "Pengumuman",
  "Berita",
  "Masuk",
];

const DrawerList = [
  {
    id: 0,
    endpoint: "/admin/profil",
    text: "Profil",
  },
  {
    id: 1,
    endpoint: "/admin/siswa",
    text: "Siswa",
  },
  {
    id: 2,
    endpoint: "/admin/guru",
    text: "Guru",
  },
  {
    id: 3,
    endpoint: "/admin/matapelajaran",
    text: "Mata Pelajaran",
  },
  {
    id: 4,
    endpoint: "/admin/pengumuman",
    text: "Pengumuman",
  },
  {
    id: 5,
    endpoint: "/admin/berita",
    text: "Berita",
  },
  {
    id: 6,
    endpoint: "/admin/galeri",
    text: "Galeri",
  },
  {
    id: 7,
    endpoint: "/admin/tambahsiswa",
    text: "Tambah Siswa",
  },
  {
    id: 8,
    endpoint: "/admin/tambahguru",
    text: "Tambah Guru",
  },
];

export default NavbarList;
export { DrawerList };
