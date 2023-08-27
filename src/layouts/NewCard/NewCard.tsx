import React, { useState } from 'react'
import { FrontCard } from './FrontCard'
import { BackCard } from './BackCard'
import styles from './NewCard.module.css'

interface NewCardProps {
  onCancel: (e: React.MouseEvent) => void
}
const NewCard = ({ onCancel }: NewCardProps) => {
  const [isFlip, setIsFliped] = useState<boolean>(false)

  const handleFlip = () => {
    setIsFliped((prev) => !prev)
  }

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        {!isFlip ? <FrontCard onCancel={onCancel} /> : <BackCard />}
      </div>
    </div>
  )
}

export default NewCard
