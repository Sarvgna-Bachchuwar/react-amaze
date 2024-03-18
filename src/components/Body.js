import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.114366&lng=79.063599&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const json = await data.json();
    
    //optional chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  //conditional rendering
  // if (ListOfRestaurants.length === 0){
  //   return <Shimmer />;
  // }

  return ListOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className='body'>
      <div className='filter'>
        <div className="search">
          <input type="text" className="search-input" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
          <button onClick={() => { 
            const filteredList = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filteredList);
          }}>
            Search
          </button>
        </div>
        <button className='top-rated' onClick={() => {
          const filteredList = ListOfRestaurants.filter((res) => res.info.avgRating > 4.5);
          setListOfRestaurants(filteredList);
        }}>
          Top Rated Restaurants
        </button>
      </div>
        <div className='res-container'>
          {
            FilteredRestaurants.map((restaurant) => (<Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>))
          }
        </div>
    </div>
  )
}

export default Body;