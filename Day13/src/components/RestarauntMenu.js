import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { addItem } from "../utils/cartSlice";
import useRestaraunt from "../utils/useRestaraunt";
import ShimmerRestarauntMenu from "./ShimmerRestarauntMenu";


const RestarauntMenu = () => {
  const { id } = useParams(); //read the dynamic routing values
  console.log("From Dynamic Routing " + id);

  const restaraunt = useRestaraunt(id);

  console.log(restaraunt);

  const dispatch = useDispatch();

  //   const addItemhandler = () => {
  //     dispatch(addItem("Grapes")); //payload : {'Grapes'}
  //   };

  const addItemToCarthandler = (item) => {
    dispatch(addItem(item));
  };

  return !restaraunt ? (
    <ShimmerRestarauntMenu />
  ) : (
    <div className="menu">
      <div className="menu-list1">
        <div>
          <img
            src={IMG_CDN_URL + restaraunt?.cloudinaryImageId}
            className="menu-img"
          />
        </div>
        <div>
          {/* <h3>RestarauntId : {id}</h3> */}
          {/* <p>cloudinaryImageId: {restaraunt?.cloudinaryImageId}</p> */}
          <h1>{restaraunt?.name}</h1>
          <h2>{restaraunt?.city}</h2>
          <h2>Rating : {restaraunt?.avgRating} Stars</h2>
          <h2>{restaraunt?.costForTwoMsg}</h2>
          {/* <button className="add-button" onClick={addItemhandler}>
          AddItem
        </button> */}
        </div>
      </div>
      <div className="menu-list2" data-testid="menu">
        <h1>Menu Items</h1>
        {Object.values(restaraunt?.menu?.items).map((item) => (
          <div key={item.id} className="item">
            <div>
              <img
                src={IMG_CDN_URL + item.cloudinaryImageId}
                alt="Restaurant Image"
                className="menuItems-img"
              />
            </div>
            <div className="menu-content">
              <h3>Name : {item.name}</h3>
              <h3>Category : {item.category}</h3>
              <h4>
                Description :{" "}
                {item.description ? item.description : "No Description"}
              </h4>
              <button
                data-testid="add-btn"
                className="add-item"
                onClick={() => addItemToCarthandler(item)}
              >
                Add +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestarauntMenu;
