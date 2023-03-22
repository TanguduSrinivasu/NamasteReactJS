import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.getElementById

const heading1 = React.createElement(
    "h1", 
    {
        id : 'title1',
        key: "key1"
    }, 
    "Namaste from Parcel");

const heading2 = React.createElement(
    "h1", 
    {
        id : 'title2',
        key: "key2"
    }, 
    "Igniting the App");

const container = React.createElement(
    "div", 
    {
        id : 'container'
    }, 
    [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);