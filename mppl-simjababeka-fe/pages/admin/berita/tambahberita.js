import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import FormBerita from "@/sections/form/FormBerita";
import Image from "next/image";
import FormData from "form-data";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@/components/input/Button";
import Stepper from "@/components/navigation/Stepper";

import { Subtitle2, Subtitle1 } from "@/components/typography/Heading";
import { JudulBeritaForm, DeskripsiBeritaForm } from "@/utils/list/FormList";

import { postBerita, updateBeritaById } from "@/utils/api/berita";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
  <span ref={ref}>
    <Button variant="contained" size="small" {...rest}>
      {children}
    </Button>
  </span>
));

const TambahBeritaPage = () => {
  // const [previewImage, setPreviewImage] = React.useState([]);
  // const [selectedImage, setSelectedImage] = React.useState([]);
  const [judul, setJudul] = React.useState([]);
  const [deskripsi, setDeskripsi] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState([]);

  const judulHandler = {
    handleInput: (e) => {
      setJudul({ ...judul, [e.target.name]: e.target.value });
    },

    handleSubmit: async () => {
      console.log(judul);
      postBerita(judul, setData);
    },
  };

  const deskripsiHandler = {
    handleInput: (e) => {
      setDeskripsi({ ...deskripsi, [e.target.name]: e.target.value });
    },

    handleSubmit: async () => {
      const updatedData = {
        judul_berita: data.judul_berita,
        isi_berita: deskripsi.isi_berita,
      };
      updateBeritaById(data.id, updatedData);
    },
  };

  const stepperFunction = {
    handleBack: () => {
      setActiveStep((prev) => prev - 1);
    },
    handleNext: () => {
      if (activeStep === 0)
        judulHandler
          .handleSubmit()
          .then(() => setActiveStep((prev) => prev + 1));
      if (activeStep === stepContent.length - 1)
        deskripsiHandler
          .handleSubmit()
          .then(() => setActiveStep((prev) => prev + 1));
    },
  };

  const stepContent = [
    {
      label: "Judul Berita",
      content: (
        <FormBerita
          handleInput={judulHandler.handleInput}
          list={JudulBeritaForm}
        />
      ),
    },
    {
      label: "Deskripsi Berita",
      content: (
        <FormBerita
          handleInput={deskripsiHandler.handleInput}
          list={DeskripsiBeritaForm}
        />
      ),
    },
  ];

  const handleReset = () => {
    setActiveStep(0);
  };

  // const handleJudul = (event) => {
  //   setJudul(event.target.value);
  // };

  // const handleDeskripsi = (event) => {
  //   setDeskripsi(event.target.value);
  // };

  // const imageHandler = (e) => {
  //   setPreviewImage([]);
  //   setSelectedImage([]);
  //   if (e.target.files) {
  //     const fileArray = Array.from(e.target.files).map((file) =>
  //       URL.createObjectURL(file)
  //     );
  //     // console.log(e.target.files);
  //     setPreviewImage((prevImages) => prevImages.concat(fileArray));
  //     Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
  //     setSelectedImage(e.target.files);
  //   }
  // };

  // const renderPhotos = (source) => {
  //   return source.map((photos) => {
  //     return (
  //       <Image
  //         src={photos}
  //         key={photos}
  //         width="200"
  //         height="200"
  //         alt={photos}
  //       />
  //     );
  //   });
  // };

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Button
          variant="contained"
          size="small"
          color="success"
          onClick={handleReset}
        >
          <Subtitle2>Buat Baru</Subtitle2>
        </Button>
        <Link href="/admin/berita">
          <ButtonNext color="cancel">
            <Subtitle2>Batal</Subtitle2>
          </ButtonNext>
        </Link>
      </Stack>
      <Stepper
        stepperFunction={stepperFunction}
        activeStep={activeStep}
        steps={stepContent}
      />
    </>
  );
};

TambahBeritaPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahBeritaPage;
