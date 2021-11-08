import AdminLayout from "../layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordBerita } from "@/utils/table/TableRecord";
import { VariableBerita } from "@/utils/table/TableVariable";
import InputText from "@/components/surfaces/Input";

const BeritaPage = () => {
  return (
    <>
      <InputText label="Cari judul berita" sx={{ width: "50%", mb: 1 }} />
      <DenseTable record={RecordBerita} variable={VariableBerita} />
    </>
  );
};

BeritaPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default BeritaPage;
