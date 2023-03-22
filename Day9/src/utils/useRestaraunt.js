import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaraunt = (id) => {

    //This customHook require resId as input and then fetch the data from the API and store the data for this we use the state(whenever resid changes data will also change)
    //and returns restaraunt data 

    const [restaraunt, setRestaraunt] = useState(null);

    useEffect(() => {
        getRestarauntInfo();
    },[])

    async function getRestarauntInfo() {
        const data = await fetch(FETCH_MENU_URL + id);
        const json = await data.json();
        console.log(json.data);
        setRestaraunt(json.data);
        console.log(json?.data?.cloudinaryImageId);
    }

    return restaraunt;

}

export default useRestaraunt;