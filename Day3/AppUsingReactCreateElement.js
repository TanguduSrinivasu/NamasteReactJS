import React from 'react';
import ReactDOM  from 'react-dom/client';


const heading1 = React.createElement(
    "h1",
    {
        id : 'header1',
        key : '1'
    },
    "Header1 using React.createElement"
)

const heading2 = React.createElement(
    "h2",
    {
        id : 'header2',
        key : '2'
    },
    "Header2 using React.createElement"
)

const heading3 = React.createElement(
    "h3",
    {
        id : 'header3',
        key : '3'
    },
    "Header3 using React.createElement"
)

const container = React.createElement(
    "div",
    {
        className : 'container'
    },
    [heading1, heading2, heading3]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);