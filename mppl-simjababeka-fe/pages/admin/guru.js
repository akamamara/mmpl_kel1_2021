import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordGuru } from "@/utils/table/TableRecord";
import { VariableGuru } from "@/utils/table/TableVariable";
import InputText from "@/components/input/Input";
const GuruPage = () => {
	return (
		<>
			<InputText label="Cari nama guru" sx={{ width: "50%", mb: 1 }} />
			<DenseTable record={RecordGuru} variable={VariableGuru} />
		</>
	);
};

GuruPage.getLayout = (page) => {
	return <AdminLayout>{page}</AdminLayout>;
};

export default GuruPage;
