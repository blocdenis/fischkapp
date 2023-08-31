import {
  CSSProperties,
  ReactElement,
  useEffect,
  useRef,
  ChangeEvent,
  useState,
} from 'react'
import styles from './TextInput.module.css'

interface TextProps {
  style?: CSSProperties
  onInputChange?: (value: string) => void
}
const TextInput = ({ style, onInputChange }: TextProps): ReactElement => {
  const inputRef = useRef<null | HTMLTextAreaElement>(null)

  const setHeight = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputMessage = e.target.value
    console.log(inputMessage)
    onInputChange(inputMessage)
  }

  return (
    <div className={styles.container} style={style}>
      <textarea
        className={styles.textarea}
        rows={1}
        cols={20}
        ref={inputRef}
        onInput={setHeight}
        onChange={handleMessageChange}
      ></textarea>
    </div>
  )
}

export default TextInput
