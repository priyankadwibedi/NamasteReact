import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            userInfo:{
                name:"Dummy name",
                location:"Dummy location"
            },
        };
        console.log(this.props.name + "Child Constructor");
    }

   async componentDidMount(){
    const data = await fetch("https://api.github.com/users/mukesh-scs");
    const json= await data.json();
    this.setState({
        userInfo:json,
    });
    console.log(json);
        console.log("Child ComponentDidmount");
    }

    render(){
        console.log(this.props.name +"Child Render")
        const {name} = this.props;
        const {count} = this.state;
        return(
            <div className="user-card">
                <h1>Count class : {count}</h1>
                <button onClick={()=>{
                  this.setState({
                    count : count+1,
                  })
                }}>Counter</button>
                <img src={this.state.userInfo.avatar_url}/>
                <h1>Name: {this.state.userInfo.name}</h1>
                <h2>Location: {this.state.userInfo.location} </h2>
                <h3>Email : test@gmail.com</h3>
            </div>
            
        )
    }
};

export default UserClass;