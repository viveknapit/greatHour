import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const isAuth = false;
const user = {
    activated:false,
}
const ProtectedRoute = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        if(!isAuth){
            navigate('/authenticate')
        }else if(isAuth && !user.activated){
            navigate('/activate')
        }
    }

    )

  return (
    <div>
      <Component />
    </div>
  )
}

export default ProtectedRoute
