import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordPengumuman } from "@/utils/table/TableRecord";
import { VariablePengumuman } from "@/utils/table/TableVariable";
import InputText from "@/components/input/Input";
import Button from "@/components/input/Button";
import Link from "next/link";
import { Subtitle2 } from "@/components/typography/Heading";

import FormDialog from "@/components/surfaces/Dialog";

import {
  getPengumuman,
  deletePengumumanById,
  updatePengumumanById,
} from "@/utils/api/pengumuman";

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
  const [idEdit, setIdEdit] = React.useState(0);

  const [result, setResult] = React.useState([]);
  const [judulPengumuman, setJudulPengumuman] = React.useState("");
  const [deskripsiPengumuman, setDeskripsiPengumuman] = React.useState("");

  const [defaultValue, setDefaultValue] = React.useState([]);

  React.useEffect(() => {
    getPengumuman(setData);
    return () => {
      setData([]);
    };
  }, []);

  const dialogEditHandler = {
    handleClickOpen: () => {
      setOpen(true);
    },

    handleClose: () => {
      setOpen(false);
    },

    handleSimpan: () => {
      if (result.judul_pengumuman && result.isi_pengumuman) {
        console.log(idEdit);
        const simpan = {
          id: idEdit,
          judul_pengumuman: result.judul_pengumuman,
          isi_pengumuman: result.isi_pengumuman,
        };
        updatePengumumanById(idEdit, simpan);
        setOpen(!open);
        let findIndex = data.map((x) => x.id).indexOf(idEdit);
        console.log(findIndex);
        data.splice(findIndex, 1, {
          id: idEdit,
          judul_pengumuman: result.judul_pengumuman,
          isi_pengumuman: result.isi_pengumuman,
          date: "--",
        });
      }
    },
  };

  const handleChange = (event) => {
    if (event.target.value.length > 0) {
      let searchKeyword = data.filter((item) =>
        item.judul_pengumuman
          ? item.judul_pengumuman
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
    const dataToShow = data.find((item) => item.id === id);
    setIdEdit(id);
    setDefaultValue(dataToShow);
    setResult(dataToShow);
  };

  const handleHapus = (row) => {
    // console.log(row[0]);
    const id = row[0];
    deletePengumumanById(id);
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setFilteredData(newData);
  };

  const handleJudulPengumuman = {
    handleInput: (event) => {
      setJudulPengumuman(event.target.value);
      setResult({ ...result, [event.target.name]: event.target.value });
    },
    checkValue: () => {
      return judulPengumuman;
    },
  };

  const handleDeskripsiPengumuman = {
    handleInput: (event) => {
      setDeskripsiPengumuman(event.target.value);
      setResult({ ...result, [event.target.name]: event.target.value });
    },
    checkValue: () => {
      return deskripsiPengumuman;
    },
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
      <FormDialog
        dialogHandler={dialogEditHandler}
        open={open}
        title="Ubah Pengumuman"
      >
        <InputText
          name="judul_pengumuman"
          label="Judul Pengumumuman"
          sx={{ mb: 1, width: "100%" }}
          onChange={(e) => handleJudulPengumuman.handleInput(e)}
          // value={handleJudulPengumuman.checkValue()}
          defaultValue={defaultValue.judul_pengumuman}
        />
        <InputText
          name="isi_pengumuman"
          label="Deskripsi"
          sx={{ mb: 1, width: "100%" }}
          multiline
          rows={5}
          onChange={(e) => handleDeskripsiPengumuman.handleInput(e)}
          // value={handleDeskripsiPengumuman.checkValue()}
          defaultValue={defaultValue.isi_pengumuman}
        />
      </FormDialog>
    </>
  );
};

PengumumanPage.getTitle = "Pengumuman";
PengumumanPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default PengumumanPage;
