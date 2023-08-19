import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
const Navigation = () => {
    
  return (
    <nav className={`${styles.navbar} `}>
        <Link to="/">
            <img src="/images/logo.png" alt="logo" width='25%'/>
        </Link>
    </nav>
  )
}

export default Navigation
