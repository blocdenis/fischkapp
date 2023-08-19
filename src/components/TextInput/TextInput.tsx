import { CSSProperties, ReactElement } from 'react'
import styles from './TextInput.module.css'

interface TextProps {
  style?: CSSProperties
}
const TextInput = (props: TextProps): ReactElement => {
  return (
    <div className={styles.container} style={props.style}>
      <span className={styles.textarea} contentEditable></span>
    </div>
  )
}

export default TextInput
