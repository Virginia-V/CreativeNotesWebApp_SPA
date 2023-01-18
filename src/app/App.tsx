import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashoard";
import httpMethods from "../services/http";

export default function App() {
  httpMethods.setToken();
  return (
    <Layout>
      {/* <ToastContainer limit={1}/> */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}
