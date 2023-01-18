import DeleteRecordButton from "../../shared/DeleteRecordButton";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import postService from "../../services/PostService";

export function PostsActionCell({ post }) {
  return (
    <div className="flex gap-4">
      <DeleteRecordButton id={post.id} remove={postService.delete} />

      <Link to={`/posts/edit/${post.id}`}>
        <button className="text-teal-600 flex items-center justify-center gap-2 py-2 text-sm">
          <AiFillEdit className="text-2xl" />
          Edit
        </button>
      </Link>
    </div>
  );
}
