import { CSSProperties, ReactElement, useEffect, useRef } from 'react'
import styles from './TextInput.module.css'

interface TextProps {
  style?: CSSProperties
}
const TextInput = (props: TextProps): ReactElement => {
  const inputRef = useRef<null | HTMLTextAreaElement>(null)
  useEffect(() => {
    inputRef?.current?.focus()
  }, [])
  return (
    <div className={styles.container} style={props.style}>
      <textarea className={styles.textarea} rows={1} ref={inputRef}></textarea>
    </div>
  )
}

export default TextInput
