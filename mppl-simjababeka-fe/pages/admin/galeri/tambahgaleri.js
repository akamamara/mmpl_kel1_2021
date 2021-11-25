import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import FormGaleri from "@/sections/form/FormGaleri";
import Image from "next/image";

import FormData from "form-data";

const TambahGaleriPage = () => {
  const [previewImage, setPreviewImage] = React.useState([]);
  const [selectedImage, setSelectedImage] = React.useState([]);
  const [judul, setJudul] = React.useState("");
  const [keterangan, setKeterangan] = React.useState("");

  const handleJudul = (event) => {
    setJudul(event.target.value);
  };

  const handleKeterangan = (event) => {
    setKeterangan(event.target.value);
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

  const simpanHandler = () => {
    if (judul && keterangan && selectedImage[0]) {
      let formData = new FormData();

      formData.append("judul", judul);
      formData.append("keterangan", keterangan);
      for (let i = 0; i < selectedImage.length; i++) {
        formData.append(`image_${i}`, selectedImage[i]);
      }
      // Log the key/value pairs
      for (var pair of formData.entries()) {
        console.log(pair);
      }
    } else {
      console.log("Isi formnya ya");
    }
    // console.log(selectedImage);
  };

  return (
    <>
      <FormGaleri
        onChange={imageHandler}
        renderImages={renderPhotos(previewImage)}
        handleJudul={handleJudul}
        handleKeterangan={handleKeterangan}
        simpanHandler={simpanHandler}
      />
    </>
  );
};

TambahGaleriPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahGaleriPage;
