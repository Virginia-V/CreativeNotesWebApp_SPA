import CreatePostModel from "../../models/createPostModel";
import Post from "../../models/post";
import UpdatePostModel from "../../models/updatePostModel";

export default interface IPostService {
  get(): Promise<Post[]>;
  getById(postId: number): Promise<Post>;
  delete(postId: number): Promise<unknown>;
  post(model: CreatePostModel): Promise<unknown>;
  put(postId: number, model: UpdatePostModel): Promise<unknown>;
}
