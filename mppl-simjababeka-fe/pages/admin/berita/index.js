import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordBerita } from "@/utils/table/TableRecord";
import { VariableBerita } from "@/utils/table/TableVariable";
import InputText from "@/components/input/Input";
import Button from "@/components/input/Button";
import Link from "next/link";
import { Subtitle2 } from "@/components/typography/Heading";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
	<span ref={ref}>
		<Button {...rest}>{children}</Button>
	</span>
));

const BeritaPage = () => {
	return (
		<>
			<InputText label="Cari judul berita" sx={{ width: "50%", mb: 1 }} />
			<Link href="/admin/berita/tambahberita" passHref>
				<ButtonNext color="success" sx={{ mb: 1 }}>
					<Subtitle2>Tambah Berita</Subtitle2>
				</ButtonNext>
			</Link>
			<DenseTable
				record={RecordBerita}
				variable={VariableBerita}
				actionable={true}
			/>
		</>
	);
};

BeritaPage.getLayout = (page) => {
	return <AdminLayout>{page}</AdminLayout>;
};

export default BeritaPage;
