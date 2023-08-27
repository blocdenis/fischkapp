import React, { FC, ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: 'vite' | 'accent'
}

const Button: FC<ButtonProps> = ({ color = 'vite', children, ...rest }) => {
  const buttonClasses = `${styles.btn} ${styles[color]}`
  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  )
}

export default Button
