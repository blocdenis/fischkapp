import { FC, useState } from 'react'
import styles from './Card.module.css'
import editIcon from '@images/EditButton.svg'
interface CardProps {
  question: string
  anwser: string
}

const Card: FC<CardProps> = ({ question, anwser }) => {
  const [isFliped, setIsFliped] = useState<boolean>(true)
  return (
    <div>
      {isFliped ? (
        <div className={styles.card}>
          <button className={styles.editBtn}>
            <img src={editIcon} alt="Edit button icon" />
          </button>
          {question}
        </div>
      ) : (
        <div className={styles.card}>{anwser}</div>
      )}
    </div>
  )
}

export default Card
