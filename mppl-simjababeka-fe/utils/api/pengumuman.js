import baseApi from "@/utils/api/baseAPI";
import { loadingSet } from "@/utils/redux/slice/loading";

import { dispatch } from "@/utils/redux/store";

export const getPengumuman = async (setData) => {
	dispatch(loadingSet(true));
	//   setLoading(true);
	return baseApi
		.get(`/pengumuman`)
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

export const postPengumuman = async (data, setData) => {
	dispatch(loadingSet(true));
	return baseApi
		.post(`/pengumuman/`, { ...data })
		.then((res) => {
			console.log(res);
			setData(res);
		})
		.catch((err) => console.log(err))
		.finally(() => {
			dispatch(loadingSet(false));
		});
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

export const deletePengumumanById = async (id) => {
	dispatch(loadingSet(true));
	//   setLoading(true);
	return baseApi
		.delete(`/pengumuman/${id}/`)
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
