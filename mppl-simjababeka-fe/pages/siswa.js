import * as React from "react";
import AdminLayout from "../layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import RecordSiswa from "@/utils/table/TableRecord";
import VariableSiswa from "@/utils/table/TableVariable";
import InputText, { BasicSelect } from "@/components/surfaces/Input";
import KelasList from "@/utils/list/SelectList";

const SiswaPage = () => {
  const [kelas, setKelas] = React.useState("");

  const handleChange = (event) => {
    setKelas(event.target.value);
  };

  return (
    <>
      <InputText label="Cari nama siswa" sx={{ width: "50%", mb: 1 }} />
      <BasicSelect
        action={handleChange}
        value={kelas}
        label="Kelas"
        data={KelasList}
      />
      <DenseTable record={RecordSiswa} variable={VariableSiswa} />
    </>
  );
};

SiswaPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default SiswaPage;
