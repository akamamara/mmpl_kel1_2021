import baseApi from "@/utils/api/baseAPI";

export const getMataPelajaran = async (setData) => {
  //   setLoading(true);
  return baseApi
    .get(`/mapel`)
    .then((res) => {
      if (res.length > 0) {
        console.log(res.map(({ id, ...rest }) => ({ ...rest })));
        setData(res.map(({ id, ...rest }) => ({ ...rest })));
      } else {
        console.log("Mapel tidak ada");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  // .finally(() => setLoading(false));
};
