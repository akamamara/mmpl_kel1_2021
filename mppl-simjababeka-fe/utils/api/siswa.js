import baseApi from "@/utils/api/baseAPI";
import { loadingSet } from "@/utils/redux/slice/loading";

import { dispatch } from "@/utils/redux/store";
export const getProfilSiswa = async (setData) => {
  dispatch(loadingSet(true));
  //   setLoading(true);
  return baseApi
    .get(`/profil/siswa/`)
    .then((res) => {
      // console.log(res.map(({ id, ...rest }) => ({ ...rest })));
      setData(res.map(({ foto_siswa, ...rest }) => ({ ...rest })));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      dispatch(loadingSet(false));
    });
};
