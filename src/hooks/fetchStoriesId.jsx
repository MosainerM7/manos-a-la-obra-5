import { useEffect, useState } from "react";
import { URL } from "../Constantes/consts";

export const getStoriesId = (storiesId) =>{
    const [stories, setStories] = useState ({
        data:[],
        loading: true
    }); 

    const fetchStoriesId = async () =>{
        try{
            const url = `${URL}/stories/${storiesId}`
            const response = await fetch(url, {
                method: "GET", 
                headers: {
                    "Content-Type": "application/json",
                    auth: localStorage.getItem("token"),
                  }
            });
    
            const {data} = await response.json();
        
            setStories({
                data: data,
                loading: false,
              });
        }catch (error){
            console.log(error)
		setStories({
			data: null,
			loading: false,
		  });
        }
    }
    useEffect(()=>{
        fetchStoriesId()
      },[])
     
    return stories;
}