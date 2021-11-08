import AdminLayout from "../layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordMataPelajaran } from "@/utils/table/TableRecord";
import { VariableMataPelajaran } from "@/utils/table/TableVariable";
import InputText from "@/components/surfaces/Input";
import Button from "@/components/surfaces/Button";

const MataPelajaranPage = () => {
  return (
    <>
      <InputText label="Cari mata pelajaran" sx={{ width: "50%", mb: 1 }} />
      <Button color="success" sx={{ mb: 1 }}>
        Tambah Mata Pelajaran
      </Button>
      <DenseTable
        record={RecordMataPelajaran}
        variable={VariableMataPelajaran}
      />
    </>
  );
};

MataPelajaranPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default MataPelajaranPage;
