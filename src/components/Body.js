import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";





const Body = () => {

  // Local state variable - 
  const [resTop, setListOfRestraunt] = useState([]);
  const [filteredresTop, setfilteredresTop] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("hello Gaurav")

  // useEffect

  useEffect(()=>{
     fetchData();
  }, []);

const fetchData =async() => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json = await data.json();
   console.log(json);
   setListOfRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setfilteredresTop(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
} 

// loader 
// if(resTop.length===0){
//   return <Shimmer/> 
// }


    return resTop.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
            <div className="search">
              <input type="text" className="search-box" value={searchText} onChange={(e) =>{
                setSearchText(e.target.value);
              }} />
              <button className="btnSearch" onClick={()=>{
                const filterSearch = resTop.filter((resData) => resData.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setfilteredresTop(filterSearch);
              }}>Search</button>
            </div>
              <button className="filter-btn" onClick={() =>{
                const filteredList = resTop.filter((resData) => resData.info.avgRating >= 4.3);
                setfilteredresTop(filteredList)
                }}>Top Rated restaurant</button>
            </div>
            <div className="res-container">
               {filteredresTop.map((restaurant)  => (
                <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))}  
            </div>
        </div>
    )
}
export default Body;

