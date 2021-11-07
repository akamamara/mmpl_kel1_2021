import AdminLayout from '../layouts/AdminLayout'
import DenseTable from '@/components/surfaces/Table'
import { RecordGuru } from '@/utils/table/TableRecord'
import { VariableGuru } from '@/utils/table/TableVariable'
import InputText from '@/components/surfaces/Input'
const GuruPage = () => {
  return (
    <>
        <InputText textLabel="nama guru" />
        <DenseTable record={RecordGuru} variable={VariableGuru} />        
    </>
  )
}

GuruPage.getLayout = (page) => {
  return (
    <AdminLayout>
        {page}
    </AdminLayout>
  )
}

export default GuruPage;