import AdminLayout from '../layouts/AdminLayout'
import DenseTable from '@/components/surfaces/Table'
import { RecordMataPelajaran } from '@/utils/table/TableRecord'
import { VariableMataPelajaran } from '@/utils/table/TableVariable'
import InputText from '@/components/surfaces/Input'
const MataPelajaranPage = () => {
  return (
    <>
        <InputText textLabel="mata pelajaran" />
        <DenseTable record={RecordMataPelajaran} variable={VariableMataPelajaran} />
    </>
  )
}

MataPelajaranPage.getLayout = (page) => {
  return (
    <AdminLayout>
        {page}
    </AdminLayout>
  )
}

export default MataPelajaranPage;