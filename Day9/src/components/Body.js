import { useState } from "react";
import { Link } from "react-router-dom";
import { restarauntList } from "../config";
import RestarauntCard from "./RestarauntCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Helper";
import useAllRestaraunt from "../utils/useAllRestaraunt";
import useOnline from "../utils/useOnline";

//Dynamically displaying data using map(we can use loops also but in functional programming we use map)


const Body = () => {
  const [searchText, setSearchText] = useState("");
  //const [restaraunts, setRestaraunts] = useState(restarauntList); to see the useEffect intial render with restarauntList data
  
  const [allRestaraunts, filteredRestaraunts, setFilteredRestaraunts]  = useAllRestaraunt(); 
  //to get all the restaraunt details from useAllRestaraunt Hook

  console.log("Renders");

  // const isOnline = useOnline();

  // if(!isOnline) {
  //   return (
  //     <h3>Offline, Please Check your Internet Connection !!!</h3>
  //   )
  // }

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
          placeholder="Enter the Restaraunt to Search"
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
