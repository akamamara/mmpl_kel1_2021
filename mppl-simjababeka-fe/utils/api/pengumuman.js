import baseApi from "@/utils/api/baseAPI";
import { loadingSet } from "@/utils/redux/slice/loading";

import { dispatch } from "@/utils/redux/store";

export const getPengumuman = async (setData) => {
  //   setLoading(true);
  return baseApi
    .get(`/pengumuman`)
    .then((res) => {
      // console.log(res.map(({ id, ...rest }) => ({ ...rest })));
      setData(res);
    })
    .catch((err) => {
      console.log(err);
    });
  // .finally(() => setLoading(false));
};

export const postPengumuman = async (data, setData) => {
  return baseApi
    .post(`/pengumuman/`, { ...data })
    .then((res) => {
      console.log(res);
      setData(res);
    })
    .catch((err) => console.log(err));
};

export const updatePengumumanById = async (id, updatedData) => {
  dispatch(loadingSet(true));
  //   setLoading(true);
  return baseApi
    .put(`/pengumuman/${id}/`, updatedData)
    .then((res) => {
      console.log(res);
      console.log("Data berhasil diedit");
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      dispatch(loadingSet(false));
    });
};
