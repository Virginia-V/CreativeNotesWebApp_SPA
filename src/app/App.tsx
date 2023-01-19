import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../components/layout/Layout";
import CreatePost from "../forms/CreatePost";
import Dashboard from "../pages/Dashoard";
import httpMethods from "../services/http";
import 'react-toastify/dist/ReactToastify.css';
import EditPost from "../forms/EditPost";

export default function App() {
  httpMethods.setToken();
  return (
    <div>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post" element={<CreatePost />} />
          <Route path="/posts/edit/:id" element={<EditPost />} />
        </Routes>
      </Layout>
    </div>
  );
}
