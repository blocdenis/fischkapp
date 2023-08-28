import React from 'react'
import styles from './IconButton.module.css'

interface IconButtonProps {
  src?: string //set svg as react element
  className?: string
  label?: string
  setEdit?: (value: boolean) => void
}

const IconButton: React.FC<IconButtonProps> = ({ src, label, setEdit }) => {
  return (
    <button className={styles.icon} onClick={() => setEdit(true)}>
      <img src={src} alt={label}></img>
    </button>
  )
}
export default IconButton
