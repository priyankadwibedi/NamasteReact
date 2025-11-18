import User from "./User";
import UserClass from "./UserClass";
import React from 'react';

class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }
componentDidMount(){
    console.log("Parent Component Did mount");
}

    render(){
        console.log("Parent Render")
        return(
            <div>
                <h1>About</h1>
                {/* <User name={"Priyanka Dwibedi function"}/> */}
                <UserClass name={"Priyanka Dwibedi"}/>
                <UserClass name={"Mukesh Tripathi Class"}/>
            </div>
        )
    }
}

// const About = () =>{
//     return(
//         <div>
//             <h1>About</h1>
//             {/* <User name={"Priyanka Dwibedi function"}/> */}
//             <UserClass name={"Priyanka Dwibedi Class"}/>
//         </div>
//     )
// };

/**
 * Parent constructor
 * parent render
 * priyanka constructor
 * priyanka render
 *mukesh constructor
 * mukesh render
 * child componentdidmount
 *  * child componentdidmount

 * parent componentdidmount
 */

export default About;  