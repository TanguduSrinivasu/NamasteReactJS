import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Img/FoodVilla.jpg'
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

// const LoggedInUser = () => {
//   return true;
// };

const Title = () => {
  return (
    <a href="/">
      <img
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
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link>Cart</Link></li>
          <li><Link to="/instamart">Instamart</Link></li>
          <li>{isOnline ? 'Online🟢' : 'Offline🔴'}</li>
          <li>{user.name}</li>
        </ul>
      </div>
      {login ? (
        <button onClick={Handler}>LogIn</button>
      ) : (
        <button onClick={Handler}>Logout</button>
      )}
    </div>
  );
};

export default Header;
