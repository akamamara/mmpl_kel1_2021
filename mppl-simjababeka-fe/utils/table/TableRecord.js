// const RecordGuru = [
//   ["Barbara", "Agama", "-"], //
//   ["Rosaria", "Agama", "-"],
//   ["Xinqiu", "Bahasa", "-"],
//   ["Zhongli", "Sejarah", "-"],
// ];
// const RecordSiswa = [
//   ["Frozen yoghurt"], //
//   ["Ice cream sandwich"],
//   ["Eclair"],
//   ["Cupcake"],
//   ["Gingerbread"],
// ];
// const RecordMataPelajaran = [
//   ["Agama", "X,XI,XII"], //
//   ["Bahasa Inggris", "X,XI,XII"],
//   ["Bahasa Indonesia", "X,XI,XII"],
// ];
// const RecordPengumuman = [
//   [
//     "Info lomba", //
//     "Lokasi: Balaikota, waktu 08.00-10.00, jgn lupa dipersiapkan ya teman-teman sekalian",
//     "10/17/2021",
//   ],
// ];
// const RecordBerita = [
//   [
//     "Class Meeting", //
//     "Lokasi: Balaikota, waktu 08.00-10.00, jgn lupa dipersiapkan ya teman-teman sekalian",
//     "10/17/2021",
//   ],
// ];
// const RecordGaleri = [
//   [
//     "Class Meeting", //
//     "url1, url2",
//     "10/17/2021",
//   ],
// ];

const RecordGuru = [
  {
    nama: "Barbara",
    mataPelajaran: "Agama",
    waliKelas: "-",
  },
  {
    nama: "Rosaria",
    mataPelajaran: "Agama",
    waliKelas: "-",
  },
  {
    nama: "Zhongli",
    mataPelajaran: "Sejarah",
    waliKelas: "-",
  },
];

const RecordSiswa = [
  {
    nama: "Sucrose",
  },
  {
    nama: "Aether",
  },
  {
    nama: "Lumine",
  },
];

const RecordMataPelajaran = [
  {
    namaMapel: "Agama",
    Kelas: "X, XI, XII",
  },
  {
    namaMapel: "Bahasa Inggris",
    Kelas: "X, XI, XII",
  },
  {
    namaMapel: "Bahasa Indonesia",
    Kelas: "X, XI, XII",
  },
];

const RecordPengumuman = [
  {
    judul: "Info Lomba",
    deskripsi:
      "Lokasi: Balaikota, waktu 08.00-10.00, jgn lupa dipersiapkan ya teman-teman sekalian",
    createdAt: "10/17/2021",
  },
];

const RecordBerita = [
  {
    judul: "Class Meeting",
    deskripsi:
      "Lokasi: Balaikota, waktu 08.00-10.00, jgn lupa dipersiapkan ya teman-teman sekalian",
    createdAt: "10/17/2021",
  },
];

const RecordGaleri = [
  {
    judul: "Class  Meeting",
    foto: "url1, url2",
    createdAt: "10/17/2021",
  },
];

export default RecordSiswa;
export {
  RecordGuru,
  RecordMataPelajaran,
  RecordPengumuman,
  RecordBerita,
  RecordGaleri,
};
