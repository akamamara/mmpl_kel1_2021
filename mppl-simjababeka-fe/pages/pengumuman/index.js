import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordPengumuman } from "@/utils/table/TableRecord";
import { VariablePengumuman } from "@/utils/table/TableVariable";
import InputText from "@/components/surfaces/Input";
import Button from "@/components/surfaces/Button";
import Link from "next/link";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
  <span ref={ref}>
    <Button {...rest}>{children}</Button>
  </span>
));

const PengumumanPage = () => {
  return (
    <>
      <InputText label="Cari judul pengumuman" sx={{ width: "50%", mb: 1 }} />
      <Link href="/pengumuman/tambahpengumuman" passHref>
        <ButtonNext color="success" sx={{ mb: 1 }}>
          Tambah Pengumuman
        </ButtonNext>
      </Link>
      <DenseTable record={RecordPengumuman} variable={VariablePengumuman} />
    </>
  );
};

PengumumanPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default PengumumanPage;
