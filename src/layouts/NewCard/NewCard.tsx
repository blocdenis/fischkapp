import React from 'react'
import { FrontCard } from './FrontCard'
import { BackCard } from './BackCard'
import styles from './NewCard.module.css'
const NewCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <FrontCard />
        <BackCard />
      </div>
    </div>
  )
}

export default NewCard
