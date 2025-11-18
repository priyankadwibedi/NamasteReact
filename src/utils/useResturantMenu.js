import { useEffect, useState } from "react";

const useResturantMenu = (placeId) =>{

    const [resInfo,setResInfo] = useState(null);

    useEffect(() =>{
       fetchData();
    },[]);


    const fetchData= async () => {
        const data = await fetch(`https://corsproxy.io/?url=https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=AIzaSyBgInNLopF2_eEBsi1WX4Gv-Ie0GwRLTi4`);
        const json = await data.json();
        console.log(json);
        setResInfo(json?.result);
    } 
      
    return resInfo;
}

export default useResturantMenu;