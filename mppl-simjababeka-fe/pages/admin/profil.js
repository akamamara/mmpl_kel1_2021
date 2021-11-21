import AdminLayout from "@/layouts/AdminLayout";
import Biodata from "@/sections/biodata/Biodata";
import Container from "@/components/surfaces/Container";
const ProfilPage = () => {
  return (
    <>
      <Container>
        <Biodata />
      </Container>
    </>
  );
};

ProfilPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default ProfilPage;
