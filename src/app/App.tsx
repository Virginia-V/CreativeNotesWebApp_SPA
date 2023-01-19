import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../components/layout/Layout";
import httpMethods from "../services/http";
import "react-toastify/dist/ReactToastify.css";
import Routing from "../pages";

export default function App() {
  httpMethods.setToken();
  return (
    <>
      <ToastContainer />
      <Layout>
        <Routing />
      </Layout>
    </>
  );
}
