import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import FormBerita from "@/sections/form/FormBerita";
import Image from "next/image";

const TambahBeritaPage = () => {
  const [previewImage, setPreviewImage] = React.useState([]);
  const [selectedImage, setSelectedImage] = React.useState([]);

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
      <FormBerita
        onChange={imageHandler}
        renderImages={renderPhotos(previewImage)}
        // simpanHandler={simpanHandler}
      />
    </>
  );
};

TambahBeritaPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahBeritaPage;
