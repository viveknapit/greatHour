import React, {useState} from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css'
const Phone = ({onNext}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
      <Card title="Enter Your Phone Number">
          <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          <div className={styles.actionButtonWrap}>
            <Button text="Next" onclick={onNext} />
          </div>
         <div className={styles.conditionPara}>
          <p>By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
         </div>
      </Card>
  )
}

export default Phone
