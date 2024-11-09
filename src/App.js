import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "./commonComponents/GlobalStyles";
import Layout from "./commonComponents/Layout";
import ProductList from "./features/ProductList";
import NotFoundView from "./commonComponents/NotFoundView";
import FilterState from "./context/FilterState";

const App = () => {
  return (
    <>
      <FilterState>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ProductList />} />
            <Route path="404" element={<NotFoundView />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
      </FilterState>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        toastId="Session Has Expired"
        theme="dark"
      />
    </>
  );
};

export default App;
