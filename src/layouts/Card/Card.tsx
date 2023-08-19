import { FC, useState } from 'react'
import styles from './Card.module.css'
import editIcon from '@images/EditButton.svg'
interface CardProps {
  question: string
  answer: string
}

const Card: FC<CardProps> = ({ question, answer }) => {
  const [isFliped, setIsFliped] = useState<boolean>(false)
  const [isEdited, setIsEdited] = useState<boolean>(false)
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
        <div className={styles.card}>
          {answer}
          <button className={styles.editBtn}>
            <img src={editIcon} alt="Edit button icon" />
          </button>
        </div>
      )}
    </div>
  )
}

export default Card
