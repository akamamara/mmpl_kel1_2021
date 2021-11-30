import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordMataPelajaran } from "@/utils/table/TableRecord";
import { VariableMataPelajaran } from "@/utils/table/TableVariable";
import InputText from "@/components/input/Input";
import Link from "next/link";
import Button from "@/components/input/Button";
import { Subtitle2 } from "@/components/typography/Heading";

import { getMataPelajaran } from "@/utils/api/mapel";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
  <span ref={ref}>
    <Button variant="contained" size="small" {...rest}>
      {children}
    </Button>
  </span>
));

const MataPelajaranPage = () => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [isChange, setIsChange] = React.useState(false);

  React.useEffect(() => {
    getMataPelajaran(setData);
  }, []);

  const handleChange = (event) => {
    if (event.target.value.length > 0) {
      let searchKeyword = data.filter((item) =>
        item.nama_mapel.toLowerCase().includes(event.target.value.toLowerCase())
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
        label="Cari mata pelajaran"
        sx={{ width: "50%", mb: 1 }}
        onChange={handleChange}
      />
      <Link href="/admin/matapelajaran/tambahmatapelajaran" passHref>
        <ButtonNext color="success" sx={{ mb: 1 }}>
          <Subtitle2>Tambah Mata Pelajaran</Subtitle2>
        </ButtonNext>
      </Link>
      <DenseTable
        record={isChange ? filteredData : data}
        variable={VariableMataPelajaran}
      />
    </>
  );
};

MataPelajaranPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default MataPelajaranPage;
