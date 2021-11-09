import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordBerita } from "@/utils/table/TableRecord";
import { VariableBerita } from "@/utils/table/TableVariable";
import InputText from "@/components/surfaces/Input";
import Button from "@/components/surfaces/Button";
import Link from "next/link";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
  <span ref={ref}>
    <Button {...rest}>{children}</Button>
  </span>
));

const BeritaPage = () => {
  return (
    <>
      <InputText label="Cari judul berita" sx={{ width: "50%", mb: 1 }} />
      <Link href="/berita/tambahberita" passHref>
        <ButtonNext color="success" sx={{ mb: 1 }}>
          Tambah Berita
        </ButtonNext>
      </Link>
      <DenseTable
        record={RecordBerita}
        variable={VariableBerita}
        actionable={true}
      />
    </>
  );
};

BeritaPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default BeritaPage;
