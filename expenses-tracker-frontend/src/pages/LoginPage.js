import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Login } from "../components/login/Login";

export const LoginPage = () => {
  return (
    <div>
      <MainLayout>
        <Login />
      </MainLayout>
    </div>
  );
};
