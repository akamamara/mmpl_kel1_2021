import { Typography } from '@mui/material'
import AdminLayout from '../layouts/AdminLayout'
import Biodata from '../sections/Biodata'

const SiswaPage = () => {
  return (
    <>
        <Biodata />
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