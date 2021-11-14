import * as React from "react";
import AdminLayout from "@/layouts/AdminLayout";
import FormGaleri from "@/sections/form/FormGaleri";
import Image from "next/image";

const TambahGaleriPage = () => {
  const [selectedImage, setSelectedImage] = React.useState([]);

  const imageHandler = (e) => {
    setSelectedImage([]);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      console.log(fileArray);
      setSelectedImage((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
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
      <FormGaleri
        onChange={imageHandler}
        renderImages={renderPhotos(selectedImage)}
      />
    </>
  );
};

TambahGaleriPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default TambahGaleriPage;
