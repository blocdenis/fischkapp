import React, { ReactElement } from 'react'
import Button from '../../components/Button/Button'
import TextInput from '../../components/TextInput/TextInput'
import styles from './NewCard.module.css'

interface FrontCard {
  onCancel: (e: React.MouseEvent) => void
  handleFlip: (e: React.MouseEvent) => void
}
export const FrontCard = ({
  onCancel,
  handleFlip,
}: FrontCard): ReactElement => {
  return (
    <div className={styles.cardFace}>
      <TextInput style={{ marginTop: '50px', marginBottom: '24px' }} />
      <div className={styles.buttons}>
        <Button color="vite" onClick={onCancel}>
          {' '}
          Cancel
        </Button>
        <Button color="accent" onClick={handleFlip}>
          {' '}
          Next
        </Button>
      </div>
    </div>
  )
}
