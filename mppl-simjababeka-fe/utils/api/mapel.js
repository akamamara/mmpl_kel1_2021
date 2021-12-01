import baseApi from "@/utils/api/baseAPI";
import { loadingSet } from "@/utils/redux/slice/loading";

import { dispatch } from "@/utils/redux/store";

export const getMataPelajaran = async (setData) => {
  //   setLoading(true);
  return baseApi
    .get(`/mapel`)
    .then((res) => {
      if (res.length > 0) {
        // console.log(res.map(({ id, ...rest }) => ({ ...rest })));
        setData(res);
      } else {
        console.log("Mapel tidak ada");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  // .finally(() => setLoading(false));
};

export const deleteMataPelajaranById = async (id) => {
  //   setLoading(true);
  return baseApi
    .delete(`/mapel/${id}/`)
    .then((res) => {
      console.log(res);
      console.log("Data terhapus");
    })
    .catch((err) => {
      console.log(err);
    });
  // .finally(() => setLoading(false));
};

export const updateMataPelajaranById = async (id, updatedData) => {
  dispatch(loadingSet(true));
  //   setLoading(true);
  return baseApi
    .put(`/mapel/${id}/`, updatedData)
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

export const postMataPelajaran = async (data) => {
  return baseApi
    .post(`/mapel/`, { ...data })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
