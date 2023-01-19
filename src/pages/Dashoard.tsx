import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Message from "../components/posts/Message";
import LogoutButton from "../features/auth/logout/LogoutButton";
import Post from "../models/post";
import postService from "../services/PostService";
import apiRequest from "../shared/apiRequest";
import { PostsActionCell } from "../components/posts/PostsActionCell";

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { isAuthenticated } = useAuth0();

  const getData = async () => {
    apiRequest.execute(
      () => postService.get(),
      (result) => setPosts(result)
    );
  };

  useEffect(() => {
    getData();
    document.addEventListener("listChanged", listChangedHandler);
    return () => {
      document.removeEventListener("listChanged", listChangedHandler);
    };
  }, []);

  const listChangedHandler = () => {
    getData();
  };

  return (
    <div>
      <h1>Your posts</h1>
      <div>
        {posts.map((post) => (
          <Message key={post.id} {...post}>
            <PostsActionCell post={post} />
          </Message>
        ))}
      </div>
      {isAuthenticated && <LogoutButton />}
    </div>
  );
}
