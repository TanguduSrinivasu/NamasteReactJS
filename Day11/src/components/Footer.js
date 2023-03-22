import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Footer = () => {

    const {user} = useContext(UserContext);
    
    return (
    <div className="footer">
        <h2>Footer</h2>
        <h4>This Site is developed by {user.name} - {user.email}</h4>
    </div>
    
    )
}

export default Footer