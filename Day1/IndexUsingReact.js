const heading1 = React.createElement("h1", {id : 'title'}, "Namaste");
const heading2 = React.createElement("h1", {id : 'title'}, "Akshay Shaini");
const container = React.createElement("div", {id : 'container'}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);

