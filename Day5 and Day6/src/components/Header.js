import { useState } from "react";

const LoggedInUser = () => {
  return true;
};

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
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

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>cart</li>
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
