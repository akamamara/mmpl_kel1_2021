import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import RecordSiswa from "@/utils/table/TableRecord";
import VariableSiswa from "@/utils/table/TableVariable";
import InputText, { BasicSelect } from "@/components/input/Input";
import KelasList from "@/utils/list/SelectList";

import { getProfilSiswa } from "@/utils/api/siswa";

const SiswaPage = () => {
  const [kelas, setKelas] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [isChange, setIsChange] = React.useState(false);

  React.useEffect(() => {
    getProfilSiswa(setData);
  }, []);

  const handleChange = (event) => {
    if (event.target.value.length > 0) {
      let searchKeyword = data.filter((item) =>
        item.nama_siswa.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setIsChange(true);
      setFilteredData(searchKeyword);
    } else if (event.target.value.length === 0) {
      setData(data);
      setIsChange(false);
    }
  };

  const handleKelas = (event) => {
    setKelas(event.target.value);
  };

  return (
    <>
      <InputText
        label="Cari nama siswa"
        sx={{ width: "50%", mb: 1 }}
        onChange={handleChange}
      />
      <BasicSelect
        action={handleKelas}
        value={kelas}
        label="Kelas"
        data={KelasList}
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
