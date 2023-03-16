import React from "react";
import HomePage from "../../Pages/HomePage/HomePage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <LoginPage />
      <HomePage />
    </>
  );
};

export default Layout;
