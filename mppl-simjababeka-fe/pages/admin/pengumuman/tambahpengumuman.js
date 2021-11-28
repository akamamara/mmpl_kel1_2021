import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import FormPengumuman from "@/sections/form/FormPengumuman";
import Image from "next/image";
import FormData from "form-data";

const TambahPengumumanPage = () => {
  const [previewImage, setPreviewImage] = React.useState([]);
  const [selectedImage, setSelectedImage] = React.useState([]);
  const [judul, setJudul] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("");

  const handleJudul = (event) => {
    setJudul(event.target.value);
  };

  const handleDeskripsi = (event) => {
    setDeskripsi(event.target.value);
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
    if (judul && deskripsi && selectedImage[0]) {
      let formData = new FormData();

      formData.append("judul", judul);
      formData.append("deskripsi", deskripsi);
      formData.append("gambar", selectedImage[0]);

      // Log the key/value pairs
      for (var pair of formData.entries()) {
        console.log(pair);
      }
    } else {
      console.log("Isi formnya ya");
    }
  };

  return (
    <>
      <FormPengumuman
        onChange={imageHandler}
        renderImages={renderPhotos(previewImage)}
        handleJudul={handleJudul}
        handleDeskripsi={handleDeskripsi}
        simpanHandler={simpanHandler}
      />
    </>
  );
};

TambahPengumumanPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahPengumumanPage;
