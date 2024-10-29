/*/ Importación de dependencias /*/ 

import { useEffect, useState } from "react";
import { URL } from "../Constantes/consts";

/*/ Declaración del custom hook /*/ 
export const getEpics = (projectId) =>{
    /*/ Estados para las epics  /*/ 
    const [epics, setEpics] = useState ({
        data:[],
        loading: true
    }); 
    /*/ Función para obtener las epics /*/ 
    const fetchEpicsId = async () =>{
        /*/ try:  detectar y controlar las excepciones
         que pueden producirse durante la ejecución de un 
         bloque de código  /*/ 
        try{
            /*/ URL predeterminada  /*/
            const url = `${URL}/projects/${projectId}/epics`
            const response = await fetch(url, {
                method: "GET", 
                headers: {
                    "Content-Type": "application/json",
                    auth: localStorage.getItem("token"),
                  }
            });
    
            const {data} = await response.json();
        
            setEpics({
                data: data,
                loading: false,
              });
        }catch (error){
            console.log(error)
		setEpics({
			data: null,
			loading: false,
		  });
        }
    }
    useEffect(()=>{
        fetchEpicsId()
      },[])
     
    return epics;
}