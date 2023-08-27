import {
  CSSProperties,
  ReactElement,
  useEffect,
  useRef,
  ChangeEvent,
} from 'react'
import styles from './TextInput.module.css'

interface TextProps {
  style?: CSSProperties
}
const TextInput = (props: TextProps): ReactElement => {
  const inputRef = useRef<null | HTMLTextAreaElement>(null)
  const setHeight = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  return (
    <div className={styles.container} style={props.style}>
      <textarea
        className={styles.textarea}
        rows={1}
        cols={20}
        ref={inputRef}
        onInput={setHeight}
      ></textarea>
    </div>
  )
}

export default TextInput
