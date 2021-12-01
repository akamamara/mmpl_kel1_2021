import { createSlice } from "@reduxjs/toolkit";

import Cookie from "js-cookie";
import { TOKEN_KEY_ACCESS, TOKEN_KEY_REFRESH } from "@/utils/api/baseAPI";

const emptyGuru = {
	email_guru: null,
	foto_guru: null,
	mapel_id: null,
	nama_guru: null,
	nip: null,
	no_telp: null,
	pendidikan: null,
	tanggal_lahir: null,
	tempat_lahir: null,
};

const emptySiswa = {
	email_siswa: null,
	foto_siswa: null,
	jurusan: null,
	kelas: null,
	nama_siswa: null,
	nisn: null,
	no_telp: null,
	tanggal_lahir: null,
	tempat_lahir: null,
};

const userSlice = createSlice({
	name: "user",
	initialState: {
		authenticated: false,
		role: {
			id: null,
			user_type: null,
		},
		currentUserGuru: emptyGuru,
		currentUserSiswa: emptySiswa,
	},
	reducers: {
		setAuthenticated: (state, action) => ({
			...state,
			authenticated: action.payload ?? false,
		}),
		setRole: (state, action) => ({
			...state,
			role: action.payload ?? {
				id: null,
				user_type: null,
			},
		}),
		setCurrentUserGuru: (state, action) => ({
			...state,
			currentUserGuru: action.payload ?? emptyGuru,
		}),
		setCurrentUserSiswa: (state, action) => ({
			...state,
			currentUserSiswa: action.payload ?? emptySiswa,
		}),
		setLogout: () => {
			Cookie.remove(TOKEN_KEY_ACCESS);
			Cookie.remove(TOKEN_KEY_REFRESH);
			return {
				authenticated: false,
				role: {
					id: null,
					user_type: null,
				},
				currentUserGuru: emptyGuru,
				currentUserSiswa: emptySiswa,
			};
		},
	},
});

export const {
	setAuthenticated,
	setRole,
	setCurrentUserGuru,
	setCurrentUserSiswa,
	setLogout,
} = userSlice.actions;
export default userSlice.reducer;
