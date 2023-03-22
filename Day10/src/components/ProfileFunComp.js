import { useEffect, useState } from "react";

const ProfileFunComp = (props) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(() => {
         //API calls are made here
         console.log(props.child + " UseEffect");
        const timer = setInterval(() => {
            console.log("Namaste React OP");
        },1000)

        return (() => {
            clearInterval(timer);
            console.log("CleanUp Function") // This is called when we moved to other component
        })

    }, [])

    countHandler = () => {
        setCount(1);
        setCount2(2);
    }

    console.log(props.child + " Render");
    return (
        <div>
            <h3>Profile Functional Component</h3>
            <h5>Name : {props.name}</h5>
            <h5>Count : {count}</h5>
            <h5>Count2 : {count2}</h5>
            <button onClick={countHandler}>Count</button>
        </div>
    )
}

export default ProfileFunComp;