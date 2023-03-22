import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config"
import Shimmer from "./Shimmer";

const RestarauntMenu = () => {

    const [restaraunt, setRestaraunt] = useState(null); //Intially Object does not contain any data
    const {id} = useParams(); //read the dynamic routing values
    console.log('From Dynamic Routing ' + id)

    useEffect(() => {
        getRestarauntInfo();
    },[])

    async function getRestarauntInfo() {
        const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId='+id);
        const json = await data.json();
        console.log(json.data);
        setRestaraunt(json.data);
        console.log(json?.data?.cloudinaryImageId);
    }

    return !restaraunt ? <Shimmer/> : (
        <div className="menu">
        <div>
            <img src={IMG_CDN_URL + restaraunt?.cloudinaryImageId} />
            <h2>RestarauntId : {id}</h2>
            <h2>cloudinaryImageId: {restaraunt?.cloudinaryImageId}</h2>
            <h2>{restaraunt?.name}</h2>
            <h2>{restaraunt?.city}</h2>
            <h2>{restaraunt?.avgRating} rating</h2>
            <h2>{restaraunt?.costForTwoMsg}</h2>
        </div>
        <div>
            <h2>Menu</h2>
            <ul>
            {
            Object.values(restaraunt?.menu?.items).map((item) => <li key={item.id}>{item.name}</li>)}
            </ul>
            {console.log(restaraunt.menu.items)}
        </div>
        </div>
    );
}

export default RestarauntMenu;