import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card';
import TextInput from '../../../components/shared/TextInput/TextInput';
import Button from '../../../components/shared/Button/Button';
import styles from './StepOtp.module.css';
const StepOtp = ({onNext}) => {
  const [otp, setOtp] = useState('');
  return (
    <>
    <div className={styles.cardWrapper}> 
      <Card title="Enter OTP we just text you">
      <TextInput 
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        />
          <div className={styles.actionButtonWrap}>
            <Button text="Next" />
          </div>
         <div className={styles.conditionPara}>
          <p>By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
         </div>
      </Card>
    </div>
    </>
  )
}

export default StepOtp
