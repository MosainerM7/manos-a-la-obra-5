import { useEffect, useState } from "react";
import { URL } from "../Constantes/consts";

export const useGetUsers = () => {
  const [user, setUsers] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const fetchUsers = async () => {
    try {
      const url = `${URL}/users`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          auth: localStorage.getItem("token"),
        },
      });

      const { data } = await response.json();

      setUsers({
        data: data,
        loading: false,
        error: null,
      });

    } catch (error) {
      console.log(error);
      setUsers({
        data: [],
        loading: false,
        error: "Failed to fetch users",
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return user;
};