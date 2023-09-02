import { FC, useState } from 'react'
import styles from './Card.module.css'
import EditModal from './EditModal'
import DefaultCard from './DefaultCard'
interface CardProps {
  question: string
  answer: string
  onClick?(): void
}

const Card: FC<CardProps> = ({ question, answer }) => {
  const [isFliped, setIsFliped] = useState<boolean>(false)
  const [isEdited, setIsEdited] = useState<boolean>(false)

  const handleEdit = () => {
    setIsEdited((prev) => !prev)
    console.log('Edit Modal')
  }

  const handleFlip = () => {
    setIsFliped(!isFliped)
    console.log('is flipped')
  }

  return (
    <>
      {isEdited ? (
        <EditModal setIsEdited={setIsEdited} />
      ) : (
        <div
          className={`${styles.card} ${isFliped ? 'flip' : ''}`}
          onClick={handleFlip}
        >
          <DefaultCard
            text={question}
            onEditBtn={handleEdit}
            cardSide={isFliped ? 'front' : 'back'}
          />
          <DefaultCard
            text={answer}
            onEditBtn={handleEdit}
            cardSide={isFliped ? 'back' : 'front'}
          />
        </div>
      )}
    </>
  )
}
export default Card
