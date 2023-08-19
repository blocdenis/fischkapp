import React from 'react'
import styles from './IconButton.module.css'

interface IconButtonProps {
  icon: React.ReactNode //set svg as react element
  label: string
  onClick: () => void
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button onClick={onClick}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </button>
  )
}
export default IconButton
