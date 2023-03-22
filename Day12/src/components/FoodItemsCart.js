import { IMG_CDN_URL } from "../config";


const FoodItemCart = ({name, description, cloudinaryImageId, price}) => {
    return(
        <div className="card">  
        <img src={ IMG_CDN_URL + cloudinaryImageId} alt="Restaurant Image" />
        <h2>{name}</h2>
        <p>{description}</p>
        <h4>Price : {price/100}</h4>
    </div>
    )
}

export default FoodItemCart;