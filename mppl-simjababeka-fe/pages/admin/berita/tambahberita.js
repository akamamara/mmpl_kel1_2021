import AdminLayout from "@/layouts/AdminLayout";
import FormBerita from "@/sections/form/FormBerita";

const TambahBeritaPage = () => {
  return (
    <>
      <FormBerita />
    </>
  );
};

TambahBeritaPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahBeritaPage;
