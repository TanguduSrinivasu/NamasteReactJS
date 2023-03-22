import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config"
import useRestaraunt from "../utils/useRestaraunt";
import ShimmerRestarauntMenu from "./ShimmerRestarauntMenu";

const RestarauntMenu = () => {

    
    const {id} = useParams(); //read the dynamic routing values
    console.log('From Dynamic Routing ' + id)

    const restaraunt = useRestaraunt(id);

    return !restaraunt ? <ShimmerRestarauntMenu/> : (
        <div className="menu">
        <div className="menu-list1">
            <img src={IMG_CDN_URL + restaraunt?.cloudinaryImageId} />
            <h2>RestarauntId : {id}</h2>
            <h2>cloudinaryImageId: {restaraunt?.cloudinaryImageId}</h2>
            <h2>{restaraunt?.name}</h2>
            <h2>{restaraunt?.city}</h2>
            <h2>{restaraunt?.avgRating} rating</h2>
            <h2>{restaraunt?.costForTwoMsg}</h2>
        </div>
        <div className="menu-list2">
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