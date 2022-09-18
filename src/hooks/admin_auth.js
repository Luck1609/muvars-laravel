import { useCallback, useEffect } from "react";
import useSWR from "swr";
import Axios from "axios";
import { toast } from "react-toastify";
import useAPIContext from "./api_context";
import { useRouter } from "next/router";


export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export const useAdminAuth = ({ middleware }) => {
  const { push, back } = useRouter();
  
  useEffect(() => {
    if (middleware === "guest" && user?.data)
      push("/management/dashboard");
    // If user is not authenticated, kick them out
    if (middleware === "auth" && !user?.data && error) {
     push("/management/login");
    }
  }, [user]);


  return {
    user: user?.data,
    error,
    register,
    login,
    logout,
  };
};
