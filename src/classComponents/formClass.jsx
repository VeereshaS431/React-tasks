import { Component } from "react";


class CustomForm extends Component{
    render(){
        return(
            <>
           <h1>Sign Up</h1> 
           <form action="">
            <input type="text" name="name" id="name" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Sign up</button>
           </form>
            </>
        )
    }
}

export default CustomForm;