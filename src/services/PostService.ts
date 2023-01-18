import CreatePostModel from "../models/createPostModel";
import Post from "../models/post";
import UpdatePostModel from "../models/updatePostModel";
import http from "./http";
import IPostService from "./interfaces/postService";

const baseUrl = "posts";

function get(): Promise<Post[]> {
  return http.get(`${baseUrl}`);
}

function getById(postId: number): Promise<Post> {
  return http.get(`${baseUrl}/${postId}`);
}

function remove(postId: number): Promise<unknown> {
  return http._delete(`${baseUrl}/${postId}`);
}

function put(postId: number, model: UpdatePostModel): Promise<unknown> {
  return http.put(`${baseUrl}/${postId}`, model);
}

function post(model: CreatePostModel): Promise<unknown> {
  return http.post(`${baseUrl}`, model);
}

const postService: IPostService = {
  get,
  put,
  getById,
  post,
  delete: remove,
};

export default postService;
