import baseApi from "@/utils/api/baseAPI";

export const getBerita = async (setData) => {
  //   setLoading(true);
  return baseApi
    .get(`/berita`)
    .then((res) => {
      console.log(res.map(({ id, ...rest }) => ({ ...rest })));
      setData(res.map(({ id, ...rest }) => ({ ...rest })));
    })
    .catch((err) => {
      console.log(err);
    });
  // .finally(() => setLoading(false));
};
