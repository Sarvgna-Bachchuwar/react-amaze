import { CDN_URL } from "../utils/constants"; 


const RestaurantCard = (props) => {
  const { resData } = props;

  const {cloudinaryImageId, name, cuisines, sla , avgRating, costForTwo} = resData?.info //object destructuring
  const { deliveryTime } = sla

  return (
    <div className='restaurant-card'>
      <img className='res-logo' alt="res-logo" src={CDN_URL+ cloudinaryImageId} />
      <h3 className='res-name'>{name}</h3>
      <h4 className='cuisine'>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

export default RestaurantCard