import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import Shimmer from "./Shimmer";


const ResturantMenu = () =>{

    const {placeId} = useParams();
    console.log(placeId);
    const resInfo = useResturantMenu(placeId);
    if (!resInfo) return <Shimmer />;

    const photoRef = resInfo.photos?.[0]?.photo_reference;
   console.log("Photoref:" + photoRef);
   const photoUrl = photoRef
   ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key="YOUR_KEY"`
    : "https://via.placeholder.com/400";
    console.log("resInfo:" +resInfo);
    return (
        <div className="menu">
            <img src={photoRef} alt={resInfo.name}/>
            <h1>{resInfo.name}</h1>
            <h1>{resInfo.formatted_address}</h1>
            <h1>{resInfo.editorial_summary.overview}</h1>
             <h2>{resInfo.types.join(",")}</h2>
        </div>
    )
};

export default ResturantMenu;
