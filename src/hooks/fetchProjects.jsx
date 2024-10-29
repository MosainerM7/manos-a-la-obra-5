import { useEffect, useState } from "react";
import { URL } from "../Constantes/consts";


export const getProjects = () => {
  const [projects, setProjects] = useState({
    data: [],
    loading: true,
  });

  const fetchProjects = async () => {
	try {
		const url = `${URL}/projects`;
		const response = await fetch(url, {
			method: "GET", 
			headers: {
				"Content-Type": "application/json",
				auth: localStorage.getItem("token"),
			  }
		});

		const {data} = await response.json();
	
		setProjects({
			data: data,
			loading: false,
		  });
	
	  } catch (error) {
		console.log(error)
		setProjects({
			data: [],
			loading: false,
		  });
	  }
  }

  useEffect(()=>{
	fetchProjects()
  },[])
 
  return projects;
};


