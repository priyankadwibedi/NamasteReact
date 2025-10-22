import ResturantCard from "./ResturantCard";
import resList  from "../utils/mockData";

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                   resList.map(resturant =>{
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