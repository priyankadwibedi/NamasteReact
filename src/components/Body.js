import ResturantCard from "./ResturantCard";
import resList  from "../utils/mockData";
import { useState } from "react";

const Body = () =>{

   const [listOfResturants, setListOfResturants] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="btn-filter" 
                 onClick={()=>{
                   const filteredList = listOfResturants.filter(
                    (res) => res.price_bucket == "$$"
                   );
                   setListOfResturants(filteredList);
                 }}
                 >
                    Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
                {
                   listOfResturants.map(resturant =>{
                    return(
                        <ResturantCard key={resturant.TID} resData={resturant}/>
                    )
                   })
                }
            </div>
        </div>
    );
};

export default Body;