import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordPengumuman } from "@/utils/table/TableRecord";
import { VariablePengumuman } from "@/utils/table/TableVariable";
import InputText from "@/components/input/Input";
import Button from "@/components/input/Button";
import Link from "next/link";
import { Subtitle2 } from "@/components/typography/Heading";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
	<span ref={ref}>
		<Button {...rest}>{children}</Button>
	</span>
));

const PengumumanPage = () => {
	return (
		<>
			<InputText label="Cari judul pengumuman" sx={{ width: "50%", mb: 1 }} />
			<Link href="/admin/pengumuman/tambahpengumuman" passHref>
				<ButtonNext color="success" sx={{ mb: 1 }}>
					<Subtitle2>Tambah Pengumuman</Subtitle2>
				</ButtonNext>
			</Link>
			<DenseTable
				record={RecordPengumuman}
				variable={VariablePengumuman}
				actionable={true}
			/>
		</>
	);
};

PengumumanPage.getLayout = (page) => {
	return <AdminLayout>{page}</AdminLayout>;
};

export default PengumumanPage;
