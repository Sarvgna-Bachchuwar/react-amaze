import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setResInfo(json.data);
  }

  if (resinfo === null) return <Shimmer />;

  const {name, cuisines, avgRating, costForTwoMessage} = resinfo?.cards[0]?.card?.card?.info; 

  const {itemCards} = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return( 
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map(item => 
        <li key={item.card.info.id}>
          {item.card.info.name} - {" Rs. "}
          {item.card.info.price/100 || item.card.info.defaultPrice/100}
        </li>)}
      </ul>
    </div>
  );
};

export default RestaurantMenu;