import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from '../assets/Img/FoodVilla.jpg'
import store from "../utils/store";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

// const LoggedInUser = () => {
//   return true;
// };

const Title = () => {
  return (
    <a href="/">
      <img
        data-testid="logo"
        className="logo"
        src={Logo}
        alt="logo"
      />
    </a>
  );
};

const Header = () => {
  const [login, setLogin] = useState(true);
  
  const Handler = () => {
    setLogin((prevState) =>  !prevState);
  };

  const isOnline = useOnline();

  // const user = useContext(UserContext);
  // console.log(user.user.name);

  const { user } = useContext(UserContext);
  console.log('UserName from userContext is ' + user.name);

  const cartItems = useSelector(store => store.cart.items);   //subcribing to items of cartSlice of store
  console.log(cartItems)

  return (
    <div className="header">
      <div><Title /></div>
      <div className="nav-items">
        <ul>
          <li><Link className='links' to="/">Home</Link></li>
          <li><Link className='links' to="/about">About</Link></li>
          <li><Link className='links' to="/contact">Contact Us</Link></li>
          <li><Link className='links' to ="/cart" data-testid="cartValue">Cart - {cartItems.length} Items</Link></li>
          <li><Link className='links' to="/instamart">Instamart</Link></li>
          <li data-testid="online-status">{isOnline ? 'Online🟢' : 'Offline🔴'}</li>
          <li>{user.name}</li>
        </ul>
      </div>
      {login ? (
        <button className='log-button' onClick={Handler}>LogIn</button>
      ) : (
        <button className='log-button' onClick={Handler}>Logout</button>
      )}
    </div>
  );
};

export default Header;
