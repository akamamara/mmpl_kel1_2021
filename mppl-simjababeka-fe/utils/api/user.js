import Cookie from "js-cookie";

import baseApi from "@/utils/api/baseAPI";
import { TOKEN_KEY_ACCESS, TOKEN_KEY_REFRESH } from "@/utils/api/baseAPI";

import { loadingSet } from "@/utils/redux/slice/loading";
import {
  alertSetError,
  alertSetSuccess,
  alertSetMessage,
} from "@/utils/redux/slice/alert";
import {
  setRole,
  setCurrentUserGuru,
  setCurrentUserSiswa,
  setAuthenticated,
} from "@/utils/redux/slice/user";
import { dispatch } from "@/utils/redux/store";

import EnumRole from "@/utils/helper/EnumRole";

export const userLogin = async (data) => {
  dispatch(loadingSet(true));
  return baseApi
    .post("/login/token/", data)
    .then((res) => {
      console.log(res);
      if (res.access?.length) {
        const params = { id: res.id, user_type: res.user_type };

        Cookie.set(TOKEN_KEY_ACCESS, res.access);
        Cookie.set(TOKEN_KEY_REFRESH, res.refresh);

        dispatch(setRole(params));
        getProfileWithID(res.id, EnumRole(res.user_type)).then(() =>
          dispatch(setAuthenticated(true))
        );

        dispatch(alertSetSuccess(true));
        dispatch(alertSetError(false));
        dispatch(alertSetMessage("Login berhasil."));
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      dispatch(loadingSet(false));
    });
};

export const refreshTokenLogin = async () => {
  const token = Cookie.get(TOKEN_KEY_REFRESH);
  return baseApi
    .post("/login/token/refresh/", { refresh: token })
    .then((res) => {
      console.log(res);
      Cookie.set(TOKEN_KEY_ACCESS, res.access);
    });
};

const registerUser = async (
  setLoadingState,
  setAlert,
  setID,
  userType,
  data
) => {
  setLoadingState(true);
  return baseApi
    .post("/register/", { ...data, user_type: userType })
    .then((res) => {
      console.log(res);
      setID(res.user.id);
      setAlert(res.message);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      setLoadingState(false);
    });
};

export const registerGuru = async (
  setLoadingState,
  setAlert,
  userType,
  setID = 1,
  data
) => {
  return registerUser(setLoadingState, setAlert, setID, userType, data);
};

export const registerSiswa = async (
  setLoadingState,
  setAlert,
  userType,
  setID = 2,
  data
) => {
  return registerUser(setLoadingState, setAlert, setID, userType, data);
};

export const getProfileWithID = async (id, role) => {
  dispatch(loadingSet(true));
  return baseApi
    .get(`/profil/${role}/${id}`)
    .then((res) => {
      console.log(res);
      if (role === "guru") dispatch(setCurrentUserGuru(res));
      if (role === "siswa") dispatch(setCurrentUserSiswa(res));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => dispatch(loadingSet(false)));
};
