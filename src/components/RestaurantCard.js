

// import resList from "../utils/mockData";
import { CDN_URL } from "../utils/contants";


const RestaurantCard = (props) => {
    const {resData} = props;
    // this is optional chaining
    const {cloudinaryImageId,name,cuisines, avgRating,deliveryTime,costForTwo} = resData?.info;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} min</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;