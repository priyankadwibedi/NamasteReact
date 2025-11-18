import useOnlineStatues from "../utils/useOnlineStatus";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Body = () =>{
   const [listOfResturants, setListOfResturants] = useState([]);
   const [filteredResturant, setFilteredResturant] = useState([]);
   const [searchText , setSearchText] = useState("");

   useEffect(()=>{
     getResturants();
   },[]);

   async function getResturants() {
       const data = await fetch("https://corsproxy.io/?url=https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.2904,-76.6122&radius=2000&type=restaurant&key="YOUR_KEY");
       const json = await data.json();
       console.log(json);
       console.log("data:" +json.results);
       setListOfResturants(json?.results);
       setFilteredResturant(json?.results);

   }
   
    const onlineStatus = useOnlineStatues();
    if(onlineStatus === false){
        return(
            <h1>You are offline !!! Try connecting to your internet</h1>
        )
    }

    return listOfResturants.length === 0 ? (
    <Shimmer/>
    ):     (<div className="body">
            <div className="filter">
                <input type="text" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button className="search-filter" 
                onClick={()=>{
                    console.log(searchText);
                  const filteredResturants = listOfResturants.filter(
                    (res)=> res.name.toLowerCase().includes(searchText.toLowerCase())

                );
                  setFilteredResturant(filteredResturants);
                }}
                >Search
                </button>
                <button className="btn-filter" 
                 onClick={()=>{
                   const filteredList = listOfResturants.filter(
                    (res) => res.rating === 4.1
                   );
                   setFilteredResturant(filteredList);
                 }}
                 >
                    Top Rated Resturants
                </button>
            </div>
            
            <div className="res-container">
                {
                   filteredResturant.map((resturant,index) =>{
                    return(
                      <Link to={"/resturants/" + resturant.place_id} key={resturant.place_id}><ResturantCard  resData={resturant}/></Link>
                    )
                   })
                }
            </div>
        </div>
    );
};

export default Body;
