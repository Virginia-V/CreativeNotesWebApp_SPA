import axios, { AxiosResponse } from "axios";
import ApiResponse from "../models/apiResponse";
import LocalStorageService from "./LocalStorageService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

async function get<Result>(path: string): Promise<Result> {
  return execute(() => axios.get(path));
}

async function post<Result>(path: string, body?: any): Promise<Result> {
  return execute(() => axios.post(path, body));
}

async function put<Result>(path: string, body?: any): Promise<Result> {
  return execute(() => axios.put(path, body));
}

async function _delete<Result>(path: string): Promise<Result> {
  return execute(() => axios.delete(path));
}

function setToken() {
  const tokenObjectString = LocalStorageService.getItem(
    "@@auth0spajs@@::3k2I6FL9BBeqmLflCn3FEF2phEGDtcyf::http://localhost:5168/api::openid profile email"
  );
  if (!tokenObjectString) return;
  const authObj = JSON.parse(tokenObjectString).body;
  axios.defaults.headers[
    "Authorization"
  ] = `${authObj.token_type} ${authObj.access_token}`;
}

async function execute<TResult>(request: () => Promise<AxiosResponse<any>>) {
  try {
    const { data } = await request();
    const apiResponse = data as ApiResponse<TResult>;
    if (apiResponse.succeeded) return Promise.resolve(apiResponse.result);
    return Promise.reject({ apiRequestFailed: true });
  } catch (error) {
    return Promise.reject(error);
  }
}

const httpMethods = {
  get,
  post,
  _delete,
  put,
  setToken
};

export default httpMethods;