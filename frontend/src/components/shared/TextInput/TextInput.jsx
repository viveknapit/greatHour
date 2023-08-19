import React from 'react'
import Styles from './TextInput.module.css'
const TextInput = (props) => {
  return (
    <div>
      <input className={Styles.input} type="text" {...props}/>
    </div>
  )
}

export default TextInput
