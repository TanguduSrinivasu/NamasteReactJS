import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

const AppLayout = () => {
  return (
    // React.Fragment is a Component
    // JSX can have only one parent
    <> 
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
