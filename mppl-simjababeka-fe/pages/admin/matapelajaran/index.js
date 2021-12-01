import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordMataPelajaran } from "@/utils/table/TableRecord";
import { VariableMataPelajaran } from "@/utils/table/TableVariable";
import InputText, { BasicSelect } from "@/components/input/Input";
import Link from "next/link";
import Button from "@/components/input/Button";
import { Subtitle2 } from "@/components/typography/Heading";
import FormDialog from "@/components/surfaces/Dialog";
import { TingkatList, JurusanList } from "@/utils/list/SelectList";
import {
  getMataPelajaran,
  deleteMataPelajaranById,
  updateMataPelajaranById,
} from "@/utils/api/mapel";

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
  const [open, setOpen] = React.useState(false);
  const [result, setResult] = React.useState([]);
  const [kelas, setKelas] = React.useState("");
  const [jurusan, setJurusan] = React.useState("");
  const [namaMapel, setNamaMapel] = React.useState("");

  const [idEdit, setIdEdit] = React.useState(0);

  React.useEffect(() => {
    getMataPelajaran(setData);
  }, []);

  const dialogEditHandler = {
    handleClickOpen: () => {
      setOpen(true);
    },

    handleClose: () => {
      setOpen(false);
    },

    handleSimpan: () => {
      if (result["Judul"] && result["Jurusan"] && result["Kelas"]) {
        console.log(idEdit);
        const simpan = {
          id: idEdit,
          nama_mapel: result["Judul"],
          jurusan: result["Jurusan"],
          kelas: result["Kelas"],
        };
        updateMataPelajaranById(idEdit, simpan);
        setOpen(!open);
        let findIndex = data.map((x) => x.id).indexOf(idEdit);
        console.log(findIndex);
        data.splice(findIndex, 1, simpan);
      }
    },
  };

  const handleChange = (event) => {
    if (event.target.value.length > 0) {
      let searchKeyword = data.filter((item) =>
        item.nama_mapel
          ? item.nama_mapel
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

  const handleEdit = (row) => {
    setOpen(!open);
    const id = row[0];
    setIdEdit(id);
  };

  const handleHapus = (row) => {
    // console.log(row[0]);
    const id = row[0];
    deleteMataPelajaranById(id);
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setFilteredData(newData);
  };

  const handleKelas = {
    handleChange: (event) => {
      setKelas(event.target.value);
      setResult({ ...result, ["Kelas"]: event.target.value });
    },
    checkValue: () => {
      return kelas;
    },
    checkData: () => {
      return TingkatList;
    },
  };

  const handleJurusan = {
    handleChange: (event) => {
      setJurusan(event.target.value);
      setResult({ ...result, ["Jurusan"]: event.target.value });
    },
    checkValue: () => {
      return jurusan;
    },
    checkData: () => {
      return JurusanList;
    },
  };

  const handleNamaMapel = {
    handleInput: (event) => {
      setNamaMapel(event.target.value);
      setResult({ ...result, [event.target.name]: event.target.value });
    },
    checkValue: () => {
      return namaMapel;
    },
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
        actionable={true}
        handleEdit={handleEdit}
        handleHapus={handleHapus}
      />
      <FormDialog
        dialogHandler={dialogEditHandler}
        open={open}
        title="Ubah Mata Pelajaran"
      >
        <InputText
          name="Judul"
          label="Nama Mata Pelajaran"
          sx={{ mb: 1, width: "100%" }}
          onChange={(e) => handleNamaMapel.handleInput(e)}
          value={handleNamaMapel.checkValue()}
        />
        <BasicSelect
          action={(e) => handleKelas.handleChange(e)}
          value={handleKelas.checkValue()}
          data={handleKelas.checkData()}
          label="Kelas"
        />
        <BasicSelect
          action={(e) => handleJurusan.handleChange(e)}
          value={handleJurusan.checkValue()}
          data={handleJurusan.checkData()}
          label="Jurusan"
        />
      </FormDialog>
    </>
  );
};

MataPelajaranPage.getTitle = "Mata Pelajaran";
MataPelajaranPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default MataPelajaranPage;
