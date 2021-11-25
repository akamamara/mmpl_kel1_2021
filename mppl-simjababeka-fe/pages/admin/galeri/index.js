import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordGaleri } from "@/utils/table/TableRecord";
import { VariableGaleri } from "@/utils/table/TableVariable";
import InputText from "@/components/input/Input";
import Button from "@/components/input/Button";
import Link from "next/link";
import { Subtitle2 } from "@/components/typography/Heading";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
  <span ref={ref}>
    <Button variant="contained" size="small" {...rest}>
      {children}
    </Button>
  </span>
));

const GaleriPage = () => {
  return (
    <>
      <InputText label="Cari judul foto" sx={{ width: "50%", mb: 1 }} />
      <Link href="/admin/galeri/tambahgaleri" passHref>
        <ButtonNext color="success" sx={{ mb: 1 }}>
          <Subtitle2>Tambah Foto</Subtitle2>
        </ButtonNext>
      </Link>
      <DenseTable
        record={RecordGaleri}
        variable={VariableGaleri}
        actionable={true}
      />
    </>
  );
};

GaleriPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default GaleriPage;
