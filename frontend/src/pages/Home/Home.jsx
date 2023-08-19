import React from 'react'
import styles from './Home.module.css'
import {Link , useNavigate} from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';
const Home = () => {
  const signInLinkStyle = {
    color:'#0083a1',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '0.8rem'
  };
  const navigate = useNavigate();
  function startRegister(){
    navigate('/authenticate');
  }
  return (
    <div className={styles.cardwrapper}>
      <Card title="welcome to Great Hour!">
          <p className={styles.text}>Do you want to make your hours great so what are you waiting for join now and learn tech throw disscussions</p>
          
          <div>
            <Button onclick={startRegister} text="Get your username" />
          </div>
          <div className={styles.signinWrapper}>
            <span className={styles.hadVisited}>had you ever visited?</span>
            <Link style={signInLinkStyle} to="/login">Sign in</Link>
          </div>
      </Card>
      
    </div>
  )
}

export default Home
