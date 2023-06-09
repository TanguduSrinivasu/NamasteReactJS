import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restarauntList } from "../config";
import RestarauntCard from "./RestarauntCard";
import Shimmer from "./Shimmer";

//Dynamically displaying data using map(we can use loops also but in functional programming we use map)
const filterData = (searchText, restaraunts) => {
  const data = restaraunts.filter((restaraunt) =>
    restaraunt?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(data);
  return data;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  //const [restaraunts, setRestaraunts] = useState(restarauntList); to see the useEffect intial render with restarauntList data
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

  console.log("Renders");

  const inputHandler = (e) => {
    setSearchText(e.target.value);
  };

  const searchHandler = () => {
    //const filteredData = filterData(searchText, restaraunts);
    const filteredData = filterData(searchText, allRestaraunts);
    setFilteredRestaraunts(filteredData);
  };

    // not render component (Early return)
    if (!allRestaraunts) return null;

  return allRestaraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          place="Search"
          value={searchText}
          onChange={inputHandler}
        />
        <button className="search-button" onClick={searchHandler}>
          Search
        </button>
      </div>
      <div className="restaraunt-list">
        {filteredRestaraunts.length === 0 ? (
          <h1>No Restaraunts Found</h1>
        ) : (
          filteredRestaraunts.map((restaurant) => {
            return (
              <Link to={'/restaraunt/' + restaurant.data.id}  key={restaurant.data.id} style={{textDecoration: 'none'}}>
                 <RestarauntCard {...restaurant.data}  />
              </Link>
            );
            {console.log(restaurant?.data?.id)}
          })
        )}
      </div>
    </>
  );
};

export default Body;
