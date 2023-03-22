import { useState, useEffect } from "react";

const useAllRestaraunt = () => {

  const [allRestaraunts, setAllRestaraunts] = useState([]);
  const [filteredRestaraunts, setFilteredRestaraunts] = useState([]);

  useEffect(() => {
    //API Call
    getRestaraunts();
  }, []);

  async function getRestaraunts() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //optional Chaining
    setAllRestaraunts(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaraunts(json?.data?.cards[2]?.data?.data?.cards); //for intial rendering
  }


  return [allRestaraunts, filteredRestaraunts, setFilteredRestaraunts];

}

export default useAllRestaraunt;