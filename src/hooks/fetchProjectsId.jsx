import { useEffect, useState } from "react";
import { URL } from "../Constantes/consts";


export const getProjectsId = (id) => {
    const[projects, setProjects] = useState({
        data: null,
        loading: true
    });

    const fetchProjectsId = async () => {
        try {
            const url = `${URL}/projects/${id}`
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
        } catch (error){
            console.log(error)
		setProjects({
			data: null,
			loading: false,
		  });
        }
    }

    useEffect(()=>{
        fetchProjectsId()
      },[])
     
    return projects;

}