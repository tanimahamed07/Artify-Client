import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const { user } = use(AuthContext);
  instance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  return instance;
};

export default useAxiosSecure;
