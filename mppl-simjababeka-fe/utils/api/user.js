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

const registerUser = async (setID, userType, data) => {
	dispatch(loadingSet(true));
	return baseApi
		.post("/register/", { ...data, user_type: userType })
		.then((res) => {
			console.log(res);
			setID(res.user.id);
		})
		.catch((err) => console.log(err))
		.finally(() => {
			dispatch(loadingSet(false));
		});
};

export const registerGuru = async (userType = 1, setID, data) => {
	return registerUser(setID, userType, data);
};

export const registerSiswa = async (userType = 2, setID, data) => {
	return registerUser(setID, userType, data);
};

export const getProfileWithID = async (id, role) => {
	dispatch(loadingSet(true));
	return baseApi
		.get(`/profil/${role}/${id}/`)
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

export const putProfileID = async (id, role, data) => {
	dispatch(loadingSet(true));
	let formData = new FormData();
	Object.keys(data).map((item) => {
		if (!!data[item]) formData.append(item, data[item]);
	});

	for (var pair of formData.entries()) {
		console.log(pair[0] + ", " + pair[1]);
	}

	return baseApi
		.patch(`/profil/${role}/${id}/`, formData)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => console.log(err))
		.finally(() => dispatch(loadingSet(false)));
};
