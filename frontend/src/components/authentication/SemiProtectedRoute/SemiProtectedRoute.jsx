import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const isAuth = false;
const user = {
    activated:false,
}
const SemiProtectedRoute = (props) => {
    const {Component}=props;
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!isAuth){
            navigate('/authenticate')
        } else if(isAuth && user.activated){
            navigate('/rooms')
        }
    }

    )
  return (
    <div>
      <Component />
    </div>
  )
}

export default SemiProtectedRoute
