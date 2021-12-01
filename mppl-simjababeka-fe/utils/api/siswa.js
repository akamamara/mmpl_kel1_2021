import baseApi from "@/utils/api/baseAPI";

export const getProfilSiswa = async (setData) => {
  //   setLoading(true);
  return baseApi
    .get(`/profil/siswa/`)
    .then((res) => {
      // console.log(res.map(({ id, ...rest }) => ({ ...rest })));
      setData(res.map(({ foto_siswa, ...rest }) => ({ ...rest })));
    })
    .catch((err) => {
      console.log(err);
    });
  // .finally(() => setLoading(false));
};
