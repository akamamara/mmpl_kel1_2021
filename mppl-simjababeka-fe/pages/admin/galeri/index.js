import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import DenseTable from "@/components/surfaces/Table";
import { RecordGaleri } from "@/utils/table/TableRecord";
import { VariableGaleri } from "@/utils/table/TableVariable";
import InputText from "@/components/input/Input";
import Button from "@/components/input/Button";
import Link from "next/link";
import { Subtitle1, Subtitle2 } from "@/components/typography/Heading";
import Box from "@mui/material/Box";
import FormDialog from "@/components/surfaces/Dialog";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Image from "next/image";

import {
  getGaleri,
  deleteGaleriById,
  updateGaleriById,
  getGaleriById,
} from "@/utils/api/galeri";
import { GaleriForm } from "@/utils/list/FormList";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
  <span ref={ref}>
    <Button variant="contained" size="small" {...rest}>
      {children}
    </Button>
  </span>
));

const Input = styled("input")({
  display: "none",
});

const GaleriPage = () => {
  const [previewImage, setPreviewImage] = React.useState([]);
  const [selectedImage, setSelectedImage] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [isChange, setIsChange] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [idEdit, setIdEdit] = React.useState(0);

  const [result, setResult] = React.useState([]);
  const [defaultValue, setDefaultValue] = React.useState([]);

  React.useEffect(() => {
    getGaleri(setData);
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
      if (result.nama_galeri && result.keterangan_galeri) {
        let formData = new FormData();
        formData.append("nama_galeri", result.nama_galeri);
        formData.append("keterangan_galeri", result.keterangan_galeri);
        formData.append("sampul_galeri", selectedImage[0]);
        updateGaleriById(idEdit, formData);
        setSelectedImage([]);
        setPreviewImage([]);
        setOpen(!open);
        let findIndex = data.map((x) => x.id).indexOf(idEdit);
        const simpan = {
          id: idEdit,
          nama_galeri: result.nama_galeri,
          keterangan_galeri: result.keterangan_galeri,
        };
        data.splice(findIndex, 1, simpan);
      }
    },
  };

  const handleChange = (event) => {
    if (event.target.value.length > 0) {
      let searchKeyword = data.filter((item) =>
        item.nama_galeri
          ? item.nama_galeri
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

  const handleEdit = async (row) => {
    setOpen(!open);
    const id = row[0];
    const dataToShow = data.find((item) => item.id === id);
    setIdEdit(id);
    setDefaultValue(dataToShow);
    setResult(dataToShow);
    // console.log(defaultValue);
  };

  const handleHapus = (row) => {
    console.log(row[0]);
    const id = row[0];
    deleteGaleriById(id);
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setFilteredData(newData);
  };

  const handleEditGaleri = {
    handleInput: (e) => {
      setResult({ ...result, [e.target.name]: e.target.value });
    },
    checkValue: (name) => {
      return result[name];
    },
  };

  const imageHandler = (e) => {
    setPreviewImage([]);
    setSelectedImage([]);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      // console.log(e.target.files);
      setPreviewImage((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
      setSelectedImage(e.target.files);
    }
  };

  const renderPhotos = (source) => {
    return source.map((photos) => {
      return (
        <Image
          src={photos}
          key={photos}
          width="200"
          height="200"
          alt={photos}
        />
      );
    });
  };

  return (
    <>
      <InputText
        label="Cari judul foto"
        sx={{ width: "50%", mb: 1 }}
        onChange={handleChange}
      />
      <Link href="/admin/galeri/tambahgaleri" passHref>
        <ButtonNext color="success" sx={{ mb: 1 }}>
          <Subtitle2>Tambah Foto</Subtitle2>
        </ButtonNext>
      </Link>
      <DenseTable
        record={isChange ? filteredData : data}
        variable={VariableGaleri}
        actionable={true}
        handleEdit={handleEdit}
        handleHapus={handleHapus}
      />
      <FormDialog
        dialogHandler={dialogEditHandler}
        open={open}
        title="Ubah Galeri"
      >
        {GaleriForm.map((item, index) => (
          <Box key={index} py={1} mb={1}>
            {item.type === "file" ? (
              <>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple={item.multiple}
                    type="file"
                    onChange={imageHandler}
                    defaultValue={defaultValue[item.name]}
                  />
                  <Button
                    variant="contained"
                    size="small"
                    component="span"
                    color="success"
                  >
                    <PhotoCamera />
                    {/* <Typography sx={{ ml: 1 }}>Upload Foto</Typography> */}
                    <Subtitle1 sx={{ ml: 1 }}>Upload Foto</Subtitle1>
                  </Button>
                </label>
                <Stack direction="row" sx={{ mt: 1 }}>
                  {renderPhotos(previewImage)}
                </Stack>
              </>
            ) : (
              <InputText
                fullWidth
                label={item.label}
                name={item.name}
                type={item.type}
                onChange={handleEditGaleri.handleInput}
                defaultValue={defaultValue[item.name]}
              />
            )}
          </Box>
        ))}
      </FormDialog>
    </>
  );
};

GaleriPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default GaleriPage;
