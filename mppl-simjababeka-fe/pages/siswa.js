import AdminLayout from '../layouts/AdminLayout'
import DenseTable from '@/components/surfaces/Table'
import RecordSiswa from '@/utils/table/TableRecord'
import VariableSiswa from '@/utils/table/TableVariable'
import InputText from '@/components/surfaces/Input'

const SiswaPage = () => {
  return (
    <>
        <InputText textLabel="nama siswa" />
        <DenseTable record={RecordSiswa} variable={VariableSiswa} />
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