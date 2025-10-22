const ResturantCard = (props) => {
    const {resData} = props;
    console.log(resData);
    return(
       <div className="res-card">
          <img className="res-logo" src={resData.img4 && resData.img4.trim() !== ""
      ? resData.img4
      : "No Image"} />
          <h3>{resData.loc_name}</h3>
          <h4>{resData.address}</h4>
          <h4>{resData.review_rating}</h4>
          <h4>{resData.delivery_time}</h4>
       </div>
    );
};

export default ResturantCard;