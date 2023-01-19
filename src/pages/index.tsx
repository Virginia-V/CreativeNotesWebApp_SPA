import { Route, Routes } from "react-router-dom";
import { routers } from "../constants";
import CreatePost from "../forms/CreatePost";
import EditPost from "../forms/EditPost";
import Dashboard from "./Dashoard";

export default function Routing() {
  return (
    <Routes>
      <Route path={routers.dashboard} element={<Dashboard />} />
      <Route path={routers.post} element={<CreatePost />} />
      <Route path={routers.editPost} element={<EditPost />} />
    </Routes>
  );
}
