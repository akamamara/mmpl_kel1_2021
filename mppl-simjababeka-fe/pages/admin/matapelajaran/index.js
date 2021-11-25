import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordMataPelajaran } from "@/utils/table/TableRecord";
import { VariableMataPelajaran } from "@/utils/table/TableVariable";
import InputText from "@/components/input/Input";
import Link from "next/link";
import Button from "@/components/input/Button";
import { Subtitle2 } from "@/components/typography/Heading";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
  <span ref={ref}>
    <Button variant="contained" size="small" {...rest}>
      {children}
    </Button>
  </span>
));

const MataPelajaranPage = () => {
  return (
    <>
      <InputText label="Cari mata pelajaran" sx={{ width: "50%", mb: 1 }} />
      <Link href="/admin/matapelajaran/tambahmatapelajaran" passHref>
        <ButtonNext color="success" sx={{ mb: 1 }}>
          <Subtitle2>Tambah Mata Pelajaran</Subtitle2>
        </ButtonNext>
      </Link>
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
