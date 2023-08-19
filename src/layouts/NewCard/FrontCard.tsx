import React, { ReactElement } from 'react'
import Button from '../../components/Button/Button'
import TextInput from '../../components/TextInput/TextInput'
import styles from './NewCard.module.css'

export const FrontCard = (): ReactElement => {
  return (
    <div className={styles.cardFace}>
      <TextInput style={{ marginTop: '50px', marginBottom: '24px' }} />
      <div className={styles.buttons}>
        <Button color="vite"> Cancel</Button>
        <Button color="accent"> Next</Button>
      </div>
    </div>
  )
}
