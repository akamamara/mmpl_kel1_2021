import AdminLayout from "@/layouts/AdminLayout";
import FormPengumuman from "@/sections/form/FormPengumuman";

const TambahPengumumanPage = () => {
  return (
    <>
      <FormPengumuman />
    </>
  );
};

TambahPengumumanPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahPengumumanPage;
