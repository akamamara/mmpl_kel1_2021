import axios from "axios";
import Cookie from "js-cookie";

export const TOKEN_KEY_ACCESS = "amFiYWJla2FBY2Nlc3M=";
export const TOKEN_KEY_REFRESH = "amFiYWJla2FSZWZyZXNo";

function handleRequestSend(config) {
	const token = Cookie.get(TOKEN_KEY_ACCESS);
	if (!!token) config.headers.Authorization = `Bearer ${token}`;
	// console.dir(config);
	return config;
}

function handleRequestError(error) {
	// console.dir(error);
	return Promise.reject(error);
}

function handleResponseReceive(response) {
	// console.dir(response);
	return response.data;
}

function handleResponseError(error) {
	// console.dir(error);
	return Promise.reject(error.response ? error.response.data : error);
}

const baseApi = axios.create({
	baseURL: "https://jabadeka.herokuapp.com",
	// baseURL: "http://localhost:8010/proxy",
	headers: {
		post: {
			"Content-Type": "multipart/form-data",
		},
	},
});
baseApi.interceptors.request.use(handleRequestSend, handleRequestError);
baseApi.interceptors.response.use(handleResponseReceive, handleResponseError);

export default baseApi;
