import React from 'react'
import Phone from './Phone/Phone';
import Email from './Email/Email';
import { useState } from 'react';
import Styles from './StepPhoneEmail.module.css';
const phoneEmailMap = {
  phone: Phone,
  email: Email,
}
const StepPhoneEmail = ({onNext}) => {
    const [type, setType] = useState('phone');
    const Component = phoneEmailMap[type]

  return (
    <>
      <div className={Styles.cardWrapper}>
          <div>
            <div className={Styles.buttonWrap}>
              <button className={`${Styles.tabButton} ${type==='phone'?Styles.active:''}`} onClick={()=> setType('phone')}> <img src="/images/phone-white.png" alt="" /> </button>
              <button className={`${Styles.tabButton} ${type==='email'?Styles.active:''}`} onClick={()=> setType('email')}> <img src="/images/email-white.png" alt="" /> </button>
            </div>
            <Component onNext ={onNext} />
          </div>
      </div>


    </>
    
  )
}

export default StepPhoneEmail
