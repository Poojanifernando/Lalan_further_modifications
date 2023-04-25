
import React from "react"
import { BrowserRouter, Route, Redirect } from "react-router-dom";



const PrivateRoute =({auth , component:Component , ...rest})=> {
   return(
    <Route {...rest} render={(props)=>{
        
        if(auth =="true")return <Component {...props}/>
        if(auth=="false"|| null)return <Redirect to={{path:"/" , state:{from:props.location}}}/>
        
    }}  />
   );
}

export default PrivateRoute;

