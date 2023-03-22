import { useContext } from "react";
import { IMG_CDN_URL } from "../config";
import UserContext from "../utils/UserContext";

const RestarauntCard = ({cloudinaryImageId, name, cuisines, lastMileTravelString}) => {

    const {user} = useContext(UserContext);

    return (
        <div className="card">  
            <img src={ IMG_CDN_URL + cloudinaryImageId} alt="Restaurant Image" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
        </div>
    )
  }

export default RestarauntCard;