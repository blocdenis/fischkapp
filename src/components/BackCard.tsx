import React from 'react'
import Button from './Button'
import TextInput from './TextInput'
import styles from './NewCard.module.css'
import DeleteButton from '@images/DeleteButton.svg'

export const BackCard = () => {
  return (
    <div className={styles.cardFace}>
      <span className={styles.card_text}>Ii pesce</span>
      <button className={styles.deleteBtn}>
        <img src={DeleteButton} alt="Delete icon" />
      </button>
      <TextInput style={{ marginTop: '8px', marginBottom: '24px' }} />
      <div className={styles.buttons}>
        <Button color="vite"> Back</Button>
        <Button color="accent"> Save</Button>
      </div>
    </div>
  )
}
