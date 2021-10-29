import AdminLayout from '../layouts/AdminLayout'

const SiswaPage = () => {
  return (
    <>
        Siswa
    </>
  )
}

SiswaPage.getLayout = (page) => {
  return (
    <AdminLayout>
        {page}
    </AdminLayout>
  )
}

export default SiswaPage;