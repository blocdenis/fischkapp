import { CSSProperties, ReactElement, useEffect, useRef } from 'react'
import styles from './TextInput.module.css'

interface TextProps {
  style?: CSSProperties
}
const TextInput = (props: TextProps): ReactElement => {
  const inputRef = useRef<null | HTMLSpanElement>(null)
  useEffect(() => {
    inputRef?.current?.focus()
  }, [])
  return (
    <div className={styles.container} style={props.style}>
      <span className={styles.textarea} contentEditable ref={inputRef}></span>
    </div>
  )
}

export default TextInput
