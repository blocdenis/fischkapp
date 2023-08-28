import React, { useState } from 'react'
import { FrontCard } from './FrontCard'
import { BackCard } from './BackCard'
import styles from './NewCard.module.css'
import { Iflashcard } from 'App'

interface NewCardProps {
  onCancel: () => void
  onSave: (flashCard: Iflashcard) => void
}
const NewCard = ({ onCancel, onSave }: NewCardProps) => {
  const [isFlip, setIsFliped] = useState<boolean>(false)

  const handleFlip = () => {
    setIsFliped((prev) => !prev)
  }
  const handleSaveButtonClick = () => {
    onSave({ question: '', answer: '', id: Date.now() })
    onCancel()
  }
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        {!isFlip ? (
          <FrontCard onCancel={onCancel} handleFlip={handleFlip} />
        ) : (
          <BackCard
            handleFlip={handleFlip}
            handleSaveButtonClick={handleSaveButtonClick}
          />
        )}
      </div>
    </div>
  )
}

export default NewCard
