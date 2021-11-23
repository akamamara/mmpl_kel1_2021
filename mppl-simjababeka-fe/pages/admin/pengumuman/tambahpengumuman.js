import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import FormPengumuman from "@/sections/form/FormPengumuman";
import Image from "next/image";

const TambahPengumumanPage = () => {
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
      <FormPengumuman
        onChange={imageHandler}
        renderImages={renderPhotos(previewImage)}
        // simpanHandler={simpanHandler}
      />
    </>
  );
};

TambahPengumumanPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahPengumumanPage;
