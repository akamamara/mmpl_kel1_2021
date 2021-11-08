import AdminLayout from "../layouts/AdminLayout";
import Biodata from "../sections/biodata/Biodata";

const ProfilPage = () => {
  return (
    <>
      <Biodata />
    </>
  );
};

ProfilPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default ProfilPage;
