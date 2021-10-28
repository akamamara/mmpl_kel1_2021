import { Typography } from '@mui/material'
import AdminLayout from '../layouts/AdminLayout'

const SiswaPage = () => {
  return (
    <>
        <Typography>Alo</Typography>
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