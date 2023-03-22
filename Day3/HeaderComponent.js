import  ReactDOM  from "react-dom/client";
import "./HeaderComponent.css";

const HeaderComponent = () => {
    return (
      <div className="header">
        <img className="logo"  src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6" alt="Logo" />
        <input type="text" placeholder="Enter the Search Details"></input>
        <img  className="logo"  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="User Logo" />
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent/>)