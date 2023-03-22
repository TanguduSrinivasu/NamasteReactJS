import { createContext } from "react";


const UserContext = createContext({
    user : {
    name : 'DummyName',
    email : 'dummy.email@gmail.com'
    }
})

export default UserContext;