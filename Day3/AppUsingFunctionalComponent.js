import  ReactDOM  from "react-dom/client";

const Container = () => {
    return(
        <div className="container">
            <h1 id='header1' key='1'>Header 1 using Functional Component</h1>
            <h2 id='header2' key='2'>Header 2 using Functional Component</h2>
            <h3 id='header3' key='3'>Header 3 using Functional Component</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container/>)