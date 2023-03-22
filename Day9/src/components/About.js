import { Outlet } from "react-router-dom";
import ProfileFunComp from "./ProfileFunComp";
import ProfileClassComp from "./ProfileClassComp";
import React from "react";


// const About = () => {
//     return( 
//     <div>
//         <h1>About Page</h1>
//         <h3>It contains About Page Details</h3>
//         <Outlet/>
//         <ProfileFunComp name="Srinu"/>
//         <ProfileClassComp name="Srinu"/>
//     </div>);
// } 

class About extends React.Component {

    constructor(props) {
        super(props);
        // console.log("Parent - Constructor");
    }

    componentDidMount() {
        // console.log("Parent - ComponentDidMount")
    }

    componentDidUpdate() {
        // console.log("Parent - ComponentDidUpdate")
    }
    
  
    render() {
        // console.log("Parent - Render");
        return( 
            <div>
                <h1>About Page</h1>
                <h3>It contains About Page Details</h3>
                <Outlet/>
                <ProfileFunComp name="Srinu" child="Child1"/>
                {/* <ProfileClassComp name="Srinu" child="Child1"/> */}
                {/* <ProfileClassComp name="Srinu" child="Child2"/> */}
            </div>);
    }
}

export default About;

//If there is Parent and its inside has Child1 which have Constructor, Constructor, ComponentDidMount
// Parent - Constructor
// Parent - Render
// Child1 - Constructor
// Child1 - Render
// Child1 - ComponentDidMount
// Parent - ComponentDidMount

// If there is Parent and its inside has Child1, Child2 which have Constructor, Constructor, ComponentDidMount
// Parent - Constructor
// Parent - Render
// Child1 - Constructor
// Child1 - Render
// Child2 - Constructor
// Child2 - Render
// Child1 - ComponentDidMount
// Child2 - ComponentDidMount
// Parent - ComponentDidMount

// If there is Parent and its children have API Call which have Constructor, Constructor, ComponentDidMount and API call in ComponentDidMount
// Constructor
// Parent - Render
// Child1 - Constructor
// Child1 - Render
// Child2 - Constructor
// Child2 - Render
// Child1 - ComponentDidMount
// Child2 - ComponentDidMount
// Parent - ComponentDidMount
// API Call - {login: 'TanguduSrinivasu', id: 46299341, node_id: 'MDQ6VXNlcjQ2Mjk5MzQx', avatar_url: 'https://avatars.githubusercontent.com/u/46299341?v=4', gravatar_id: '', …}
// Child1 - Render
// API Call - {login: 'TanguduSrinivasu', id: 46299341, node_id: 'MDQ6VXNlcjQ2Mjk5MzQx', avatar_url: 'https://avatars.githubusercontent.com/u/46299341?v=4', gravatar_id: '', …}
// Child2 - Render

// If there is Parent and its children have API Call which have Constructor, Constructor, ComponentDidMount and API call in ComponentDidMount and ComponentDidUpdate
// Constructor
// Parent - Render
// Child1 - Constructor
// Child1 - Render
// Child2 - Constructor
// Child2 - Render
// Child1 - ComponentDidMount
// Child2 - ComponentDidMount
// Parent - ComponentDidMount
// API Call - {login: 'TanguduSrinivasu', id: 46299341, node_id: 'MDQ6VXNlcjQ2Mjk5MzQx', avatar_url: 'https://avatars.githubusercontent.com/u/46299341?v=4', gravatar_id: '', …}
// Child1 - Render
// Child1 - omponentDidUpdate
// API Call - {login: 'TanguduSrinivasu', id: 46299341, node_id: 'MDQ6VXNlcjQ2Mjk5MzQx', avatar_url: 'https://avatars.githubusercontent.com/u/46299341?v=4', gravatar_id: '', …}
// Child2 - Render
// Child2 - omponentDidUpdate