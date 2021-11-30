import baseApi from "@/utils/api/baseAPI";

export const getProfilGuru = async (setData) => {
  //   setLoading(true);
  return baseApi
    .get(`/profil/guru/`)
    .then((res) => {
      // console.log(res.map(({ id, ...rest }) => ({ ...rest })));
      setData(res.map(({ foto_guru, ...rest }) => ({ ...rest })));
    })
    .catch((err) => {
      console.log(err);
    });
  // .finally(() => setLoading(false));
};
