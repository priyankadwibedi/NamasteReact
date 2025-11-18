const ResturantCard = (props) => {
   const {resData} = props;

   const photoRef = resData.photos?.[0]?.photo_reference;
   console.log("Photoref:" + photoRef);
   const photoUrl = photoRef
   ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=AIzaSyBgInNLopF2_eEBsi1WX4Gv-Ie0GwRLTi4`
   : "https://via.placeholder.com/400";
    console.log(resData);
    return(
       <div className="res-card">
          <img className="res-logo" src={photoUrl} alt={resData.name}/>
          <h3>Name:{resData.name}</h3>
          {/* <h4>Type:{resData.types.join(",")}<br/></h4> */}
          <h4>Rating:{resData.rating}</h4>
          <h4>Price:{resData.price_level}</h4>
       </div>
    );
};

export default ResturantCard;