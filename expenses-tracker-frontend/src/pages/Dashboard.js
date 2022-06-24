import React from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";

export const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) navigate("/");
  }, []);

  return (
    <div>
      <MainLayout>Dashboard</MainLayout>
    </div>
  );
};
