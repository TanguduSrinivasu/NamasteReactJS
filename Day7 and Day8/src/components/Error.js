import { useRouteError } from "react-router-dom";

const Error = () => {

    const error  = useRouteError();
    console.log(error);
    return(
    <div>
        <h3>Oops Something Went Wrong</h3>
        <h3>{error.status + " : " + error.statusText}</h3>
    </div>);
} 

export default Error;