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
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    getPengumuman(setData);
    return () => {
      setData([]);
    };
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

  const handleEdit = (row) => {
    setOpen(!open);
    // const id = row[0];
    // setIdEdit(id);
  };

  const handleHapus = (row) => {
    console.log(row[0]);
    // const id = row[0];
    // deleteMataPelajaranById(id);
    // const newData = data.filter((item) => item.id !== id);
    // setData(newData);
    // setFilteredData(newData);
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
        handleEdit={handleEdit}
        handleHapus={handleHapus}
      />
    </>
  );
};

PengumumanPage.getTitle = "Pengumuman";
PengumumanPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default PengumumanPage;
