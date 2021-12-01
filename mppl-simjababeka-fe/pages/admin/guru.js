import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordGuru } from "@/utils/table/TableRecord";
import { VariableGuru } from "@/utils/table/TableVariable";
import InputText from "@/components/input/Input";

import { getProfilGuru } from "@/utils/api/guru";

const GuruPage = () => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [isChange, setIsChange] = React.useState(false);

  React.useEffect(() => {
    getProfilGuru(setData);
  }, []);

  const handleChange = (event) => {
    if (event.target.value.length > 0) {
      let searchKeyword = data.filter((item) =>
        item.nama_guru
          ? item.nama_guru
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          : ""
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
        label="Cari nama guru"
        sx={{ width: "50%", mb: 1 }}
        onChange={handleChange}
      />
      <DenseTable
        record={isChange ? filteredData : data}
        variable={VariableGuru}
      />
    </>
  );
};

GuruPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default GuruPage;
