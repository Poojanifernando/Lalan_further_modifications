import { useState } from "react";

export default function useAuth(initialValue){
    const [isAuth, setIsAuth] = useState(initialValue);
    // const localestorage = localStorage.setItem('tiems',isAuth)
    function loginAuth(){
        console.log("login to the system")
        // localStorage.setItem('tiems',true)
        setIsAuth(true);
    }
    function logoutAuth(){
        console.log("logout out from the system")
        // localStorage.setItem('tiems',false)
        setIsAuth(false);
    }
    return[isAuth , loginAuth , logoutAuth]
}