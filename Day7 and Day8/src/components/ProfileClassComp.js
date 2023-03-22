import React from "react"; 
import { json } from "react-router-dom";

class ProfileClassComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            count2 : 1,
            userInfo : {
                login : 'DummyName',
                id : 'DummyId'
            }
        }
    console.log(this.props.child + " - Constructor")
    }

    // async componentDidMount() {
    //     //API calls are made here
    //     console.log(this.props.child + " - ComponentDidMount")
    //     const data = await fetch('https://api.github.com/users/TanguduSrinivasu');
    //     const json = await data.json();
    //     console.log(json);
    //     this.setState({
    //         userInfo : json
    //     })
    // }

    componentDidMount() {
        //Demonstrtion for Cleanup Function
        //If we give this to the variable we can called in the whole component anywhere
        this.timer = setInterval(() => {
            console.log(this.props.child + " - ComponentDidMount")
        },1000)
    }

    componentDidUpdate() {
        console.log(this.props.child + " - ComponentDidUpdate")
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log(this.props.child + " - ComponentWillUnmount")
    }

    countHandler = () => {
        this.setState({
            count : 1,
            count2 : 2
        })
    }

    

    render() {
        
        console.log(this.props.child + " - Render")
        return(
            <div>
                <h3>Profile Class Component - {this.props.child}</h3>
                <h5>Name : {this.props.name}</h5>
                <h5>Count : {this.state.count}</h5>
                <h5>Count2 : {this.state.count2}</h5>
                <button onClick={this.countHandler}>Count</button>
                <h3>From Github API</h3>
                {/* <h3>Name : {this.state.userInfo?.login}</h3>
                <h3>ID : {this.state.userInfo?.id}</h3> */}
            </div>
        )
    }
}

export default ProfileClassComp;


// If the Child1 has Constructor, Constructor, ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount
// Child1 - Constructor
// Child1 - Render
// Child1 - ComponentDidMount
// API Call - {login: 'TanguduSrinivasu', id: 46299341, node_id: 'MDQ6VXNlcjQ2Mjk5MzQx', avatar_url: 'https://avatars.githubusercontent.com/u/46299341?v=4', gravatar_id: '', …}
// Child1 - Render 
// Child1 - ComponentDidUpdate
// Child1 - ComponentWillUnmount