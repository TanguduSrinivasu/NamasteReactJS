import { useEffect, useState } from "react";

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true);
    //Here we used state because based on this state variable rendering or loading depends that is online or offline should reflect on the UI.

    useEffect(() => {

        const handleOnline = () => {
            setIsOnline(true);
        }
    
        const handleOfline = () => {
            setIsOnline(false)
        }

        window.addEventListener('online' , handleOnline);
        window.addEventListener('offline', handleOfline);

        return ( () => {
            window.removeEventListener('online' , handleOnline); //eventHandlers need to cleanup 
            window.removeEventListener('offline', handleOfline);
        })
    }, [])

    // This addEventListener should run only once when the Page loads so we used the useEffect
    
    return isOnline;  // returns true or false which is boolean
}

export default useOnline;