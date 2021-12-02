import baseApi from "@/utils/api/baseAPI";
import { loadingSet } from "@/utils/redux/slice/loading";

import { dispatch } from "@/utils/redux/store";
export const getBerita = async (setData) => {
	//   setLoading(true);
	dispatch(loadingSet(true));
	return baseApi
		.get(`/berita`)
		.then((res) => {
			// console.log(res.map(({ id, ...rest }) => ({ ...rest })));
			setData(res);
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			dispatch(loadingSet(false));
		});
};
export const getBeritaById = async (id, setData) => {
	//   setLoading(true);
	dispatch(loadingSet(true));
	return baseApi
		.get(`/berita/${id}/`)
		.then((res) => {
			// console.log(res.map(({ id, ...rest }) => ({ ...rest })));
			setData(res);
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			dispatch(loadingSet(false));
		});
};

export const postBerita = async (data, setData) => {
	dispatch(loadingSet(true));
	return baseApi
		.post(`/berita/`, { ...data })
		.then((res) => {
			console.log(res);
			setData(res);
		})
		.catch((err) => console.log(err))
		.finally(() => {
			dispatch(loadingSet(false));
		});
};

export const updateBeritaById = async (id, updatedData) => {
	dispatch(loadingSet(true));
	//   setLoading(true);
	return baseApi
		.put(`/berita/${id}/`, updatedData)
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

export const deleteBeritaById = async (id) => {
	//   setLoading(true);
	dispatch(loadingSet(true));
	return baseApi
		.delete(`/berita/${id}/`)
		.then((res) => {
			console.log(res);
			console.log("Data terhapus");
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			dispatch(loadingSet(false));
		});
};
