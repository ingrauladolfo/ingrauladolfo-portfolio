import axiosClient from "../config/axiosClient";
import { crudResponse } from "./response";

/* const getHeaders = keys => {
	const acceso = JSON.parse(localStorage.getItem('x-acceso'))
	return { [AUTH_HEADER]: keys?.proxyToken, "x-id-acceso": keys?.idAcceso, "x-token-acceso": acceso, "Content-Type": "application/json", Accept: "application/json", }
} */
export const serviceAll = async (keys, request, url, method) => {
	try {
		const response = await axiosClient({
			method: method,
			url: url,
			headers: getHeaders(keys),
			data: request,
		});
		if (response.status === 200) { return crudResponse(true, response?.data?.resultado, response?.data?.mensaje); } else { return crudResponse(false, null, response?.data?.mensaje); }
	} catch (error) { return crudResponse(false, null, error?.message); }
};