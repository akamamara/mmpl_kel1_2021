import AdminLayout from '../layouts/AdminLayout'
import DenseTable from '@/components/surfaces/Table'
import { RecordPengumuman} from '@/utils/table/TableRecord'
import { VariablePengumuman } from '@/utils/table/TableVariable'
import InputText from '@/components/surfaces/Input'
const PengumumanPage = () => {
  return (
    <>
        <InputText textLabel="judul pengumuman" />
        <DenseTable record={RecordPengumuman} variable={VariablePengumuman} />
    </>
  )
}

PengumumanPage.getLayout = (page) => {
  return (
    <AdminLayout>
        {page}
    </AdminLayout>
  )
}

export default PengumumanPage;