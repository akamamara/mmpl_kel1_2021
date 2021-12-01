import baseApi from "@/utils/api/baseAPI";
import { loadingSet } from "@/utils/redux/slice/loading";

import { dispatch } from "@/utils/redux/store";
export const getProfilGuru = async (setData) => {
  //   setLoading(true);
  dispatch(loadingSet(true));
  return baseApi
    .get(`/profil/guru/`)
    .then((res) => {
      // console.log(res.map(({ id, ...rest }) => ({ ...rest })));
      setData(res.map(({ foto_guru, ...rest }) => ({ ...rest })));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      dispatch(loadingSet(false));
    });
};
