import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import FormPengumuman from "@/sections/form/FormPengumuman";
import Image from "next/image";
import FormData from "form-data";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import { Subtitle2, Subtitle1 } from "@/components/typography/Heading";
import Button from "@/components/input/Button";

import { JudulForm, DeskripsiForm } from "@/utils/list/FormList";
import Stepper from "@/components/navigation/Stepper";

import { postPengumuman, updatePengumumanById } from "@/utils/api/pengumuman";

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
  <span ref={ref}>
    <Button variant="contained" size="small" {...rest}>
      {children}
    </Button>
  </span>
));

const TambahPengumumanPage = () => {
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
      postPengumuman(judul, setData);
    },
  };

  const deskripsiHandler = {
    handleInput: (e) => {
      setDeskripsi({ ...deskripsi, [e.target.name]: e.target.value });
    },

    handleSubmit: async () => {
      const updatedData = {
        judul_pengumuman: data.judul_pengumuman,
        isi_pengumuman: deskripsi.isi_pengumuman,
      };
      updatePengumumanById(data.id, updatedData);
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
      label: "Judul Pengumuman",
      content: (
        <FormPengumuman
          handleInput={judulHandler.handleInput}
          list={JudulForm}
        />
      ),
    },
    {
      label: "Deskripsi Berita",
      content: (
        <FormPengumuman
          handleInput={deskripsiHandler.handleInput}
          list={DeskripsiForm}
        />
      ),
    },
  ];

  const handleReset = () => {
    setActiveStep(0);
  };

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
        <Link href="/admin/pengumuman">
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

TambahPengumumanPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahPengumumanPage;
