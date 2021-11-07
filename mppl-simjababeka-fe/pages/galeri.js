import AdminLayout from '../layouts/AdminLayout'
import DenseTable from '@/components/surfaces/Table'
import { RecordGaleri } from '@/utils/table/TableRecord'
import { VariableGaleri } from '@/utils/table/TableVariable'
import InputText from '@/components/surfaces/Input'
const GaleriPage = () => {
  return (
    <>
        <InputText textLabel="judul foto" />
        <DenseTable record={RecordGaleri} variable={VariableGaleri} />
    </>
  )
}

GaleriPage.getLayout = (page) => {
  return (
    <AdminLayout>
        {page}
    </AdminLayout>
  )
}

export default GaleriPage;