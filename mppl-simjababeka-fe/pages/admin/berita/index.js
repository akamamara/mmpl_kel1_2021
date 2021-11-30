import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordBerita } from "@/utils/table/TableRecord";
import { VariableBerita } from "@/utils/table/TableVariable";
import InputText from "@/components/input/Input";
import Button from "@/components/input/Button";
import Link from "next/link";
import { Subtitle2 } from "@/components/typography/Heading";

import { getBerita } from "@/utils/api/berita";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
  <span ref={ref}>
    <Button variant="contained" size="small" {...rest}>
      {children}
    </Button>
  </span>
));

const BeritaPage = () => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [isChange, setIsChange] = React.useState(false);

  React.useEffect(() => {
    getBerita(setData);
  }, []);

  const handleChange = (event) => {
    if (event.target.value.length > 0) {
      let searchKeyword = data.filter((item) =>
        item.judul_berita
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
      setIsChange(true);
      setFilteredData(searchKeyword);
    } else if (event.target.value.length === 0) {
      setData(data);
      setIsChange(false);
    }
  };

  return (
    <>
      <InputText
        label="Cari judul berita"
        sx={{ width: "50%", mb: 1 }}
        onChange={handleChange}
      />
      <Link href="/admin/berita/tambahberita" passHref>
        <ButtonNext color="success" sx={{ mb: 1 }}>
          <Subtitle2>Tambah Berita</Subtitle2>
        </ButtonNext>
      </Link>
      <DenseTable
        record={isChange ? filteredData : data}
        variable={VariableBerita}
        actionable={true}
      />
    </>
  );
};

BeritaPage.getTitle = "Berita";

BeritaPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default BeritaPage;
