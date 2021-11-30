import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordPengumuman } from "@/utils/table/TableRecord";
import { VariablePengumuman } from "@/utils/table/TableVariable";
import InputText from "@/components/input/Input";
import Button from "@/components/input/Button";
import Link from "next/link";
import { Subtitle2 } from "@/components/typography/Heading";

import { getPengumuman } from "@/utils/api/pengumuman";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
  <span ref={ref}>
    <Button variant="contained" size="small" {...rest}>
      {children}
    </Button>
  </span>
));

const PengumumanPage = () => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [isChange, setIsChange] = React.useState(false);

  React.useEffect(() => {
    getPengumuman(setData);
  }, []);

  const handleChange = (event) => {
    if (event.target.value.length > 0) {
      let searchKeyword = data.filter((item) =>
        item.judul_pengumuman
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
        label="Cari judul pengumuman"
        sx={{ width: "50%", mb: 1 }}
        onChange={handleChange}
      />
      <Link href="/admin/pengumuman/tambahpengumuman" passHref>
        <ButtonNext color="success" sx={{ mb: 1 }}>
          <Subtitle2>Tambah Pengumuman</Subtitle2>
        </ButtonNext>
      </Link>
      <DenseTable
        record={isChange ? filteredData : data}
        variable={VariablePengumuman}
        actionable={true}
      />
    </>
  );
};

PengumumanPage.getTitle = "Pengumuman";
PengumumanPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default PengumumanPage;
