import { useState } from "react";
import { toast } from "react-toastify";
import postService from "../services/PostService";
import apiRequest from "../shared/apiRequest";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

type FormTypes = {
  description: string;
};

const schema = yup.object({
  description: yup
    .string()
    .required(() =>
      toast.error("Description Field empty 😊", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      })
    )
    .max(300, () =>
      toast.error("Description too long 😊", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      })
    ),
});
export default function Post() {
  const [post, setPost] = useState<FormTypes>({ description: "" });
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: FormTypes) => {
    apiRequest.execute(
      () => postService.post(values),
      () => {
        toast.success("Post has been made 😀", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        navigate("/dashboard");
        const event = new CustomEvent("listChanged");
        document.dispatchEvent(event);
      }
    );
  };

  return (
    <div className="my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-bold">
          {post.hasOwnProperty("id") ? "Edit your post" : "Create a new post"}
        </h1>
        <div className="py-2">
          <h3 className="text-lg font-medium py-2">Description</h3>
          <textarea
            id="description"
            {...register("description")}
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-sm"
          />
          <p
            className={`text-cyan-600 font-medium text-sm ${
              post.description.length > 300 ? "text-red-600" : ""
            }`}
          >
            {post.description.length}/300
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-600 text-white font-medium p-2 my-2 rounded-lg text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
