import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import RecordSiswa from "@/utils/table/TableRecord";
import VariableSiswa from "@/utils/table/TableVariable";
import InputText, { BasicSelect } from "@/components/input/Input";
import KelasList, {
  TingkatListSiswa,
  JurusanListSiswa,
  KelasListSiswa,
} from "@/utils/list/SelectList";

import { getProfilSiswa } from "@/utils/api/siswa";

const SiswaPage = () => {
  const [kelas, setKelas] = React.useState("");
  const [jurusan, setJurusan] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [isChange, setIsChange] = React.useState(false);

  React.useEffect(() => {
    getProfilSiswa(setData);
  }, []);

  const handleChange = (event) => {
    if (event.target.value.length > 0) {
      let searchKeyword = data.filter((item) =>
        item.nama_siswa
          ? item.nama_siswa
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          : ""
      );
      setIsChange(true);
      setFilteredData(searchKeyword);
    } else if (event.target.value.length === 0) {
      setData(data);
      setIsChange(false);
    }
  };

  const handleJurusan = (event) => {
    setJurusan(event.target.value);
    if (event.target.value !== "Semua") {
      console.log(data);
      let tingkat = event.target.value.split(" - ")[0];
      let jurusan = event.target.value.split(" - ")[1];
      console.log(tingkat);
      console.log(jurusan);
      let searchFilter = data.filter((item) =>
        item.jurusan ? item.jurusan === jurusan && item.kelas === tingkat : ""
      );
      setIsChange(true);
      setFilteredData(searchFilter);
    } else {
      console.log("sem");
      setFilteredData(data);
      setIsChange(false);
    }
  };

  return (
    <>
      <InputText
        label="Cari nama siswa"
        sx={{ width: "50%", mb: 1 }}
        onChange={handleChange}
      />
      <BasicSelect
        action={handleJurusan}
        value={jurusan}
        label="Jurusan"
        data={KelasListSiswa}
      />
      <DenseTable
        record={isChange ? filteredData : data}
        variable={VariableSiswa}
      />
    </>
  );
};

SiswaPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default SiswaPage;
