import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItemCart from "./FoodItemsCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  }

  return (
    <div className="cart">
      <h2 style={{ textAlign: "center" }}>Cart Items are</h2>
      <button className="clear-button" onClick={() => clearCartHandler()}>Clear Cart</button>
      <div className="cart-list">
        {cartItems.map((item) => (
          <FoodItemCart key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
