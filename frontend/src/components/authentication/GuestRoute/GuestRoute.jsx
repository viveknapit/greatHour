import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const isAuth = false;
const GuestRoute = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect (()=>{
        let login = localStorage.getItem('login');
        if(isAuth){
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

export default GuestRoute
