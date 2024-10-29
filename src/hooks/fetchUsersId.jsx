import { useEffect, useState } from "react";
import { URL } from "../Constantes/consts";


export const useGetUserId = (userId) =>{
    const [userId, setUserId] = useState ({
        data:[],
        loading: true
    }); 

    const fetchuserId = async () =>{
        try{
            const url = `${URL}/users/${userId}`;
            const response = await fetch(url, {
                method: "GET", 
                headers: {
                    "Content-Type": "application/json",
                    auth: localStorage.getItem("token"),
                  }
            });
    
            const {data} = await response.json();
        
            setUserId({
                data: data,
                loading: false,
              });
        }catch (error){
            console.log(error)
		setUserId({
			data: null,
			loading: false,
		  });
        }
    }
    useEffect(()=>{
        fetchuserId()
      },[userId])
     
    return user;
}