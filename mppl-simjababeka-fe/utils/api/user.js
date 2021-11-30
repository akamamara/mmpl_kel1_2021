import baseApi from "@/utils/api/baseAPI";
import Cookie from "js-cookie";

import { TOKEN_KEY_ACCESS, TOKEN_KEY_REFRESH } from "@/utils/api/baseAPI";

export const userLogin = async (setLoadingState, data) => {
	setLoadingState(true);
	return baseApi
		.post("/login/token/", data)
		.then((res) => {
			console.log(res);
			Cookie.set(TOKEN_KEY_ACCESS, res.access);
			Cookie.set(TOKEN_KEY_REFRESH, res.refresh);
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			setLoadingState(false);
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

export const getProfileWithID = async (setLoading, setData, id, role) => {
	setLoading(true);
	return baseApi
		.get(`/profil/${role}/${id}`)
		.then((res) => {
			console.log(res);
			setData(res);
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => setLoading(false));
};
