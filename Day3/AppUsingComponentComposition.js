import  ReactDOM  from "react-dom/client";

const Header1 = () => {
    return(
    <h1 id='header1' key='1'>Header 1 using Component Composition</h1>
    );
}

const Header2 = () => {
    return(
    <h1 id='header2' key='2'>Header 2 using Component Composition</h1>
    );
}

const Header3 = () => {
    return(
    <h1 id='header3' key='3'>Header 3 using Component Composition</h1>
    );
}

const Container = () => {
    return(
    <div className="container">
        <Header1></Header1>
        <Header2></Header2>
        <Header3></Header3>
    </div>) 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container/>)