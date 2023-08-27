import { FC, useState } from 'react'
import styles from './Card.module.css'
import editIcon from '@images/EditButton.svg'
// import deleteIcon from '@images/DeleteButton.svg'
import IconButton from '../../components/IconButton/IconButton'
// import TextInput from '../../components/TextInput/TextInput'
// import Button from '../../components/Button/Button'
import EditModal from './EditModal'
import DefaultCard from './DefaultCard'
interface CardProps {
  question: string
  answer: string
  onClick?(): void
}

const Card: FC<CardProps> = ({ question, answer }) => {
  const [isFliped, setIsFliped] = useState<boolean>(false)
  const [isEdited, setIsEdited] = useState<boolean>(true)

  const handleEdit = () => {
    setIsEdited((prev) => !prev)
    console.log('Edit Modal')
  }
  const flip = () => {
    setIsFliped((prev) => !prev)
    console.log('is flipped')
  }
  return (
    <div className={styles.card}>
      {isEdited ? (
        <div
          className={`${styles.defaultCardWrapper} ${
            isFliped ? styles.flip : ''
          } `}
        >
          <DefaultCard onEditBtn={handleEdit} text={question} flip={flip} />
          <DefaultCard onEditBtn={handleEdit} text={answer} flip={flip} />
        </div>
      ) : (
        <div>
          <EditModal />
          <div className={styles.cardContent}>{question}</div>
        </div>
      )}
    </div>
  )
}

export default Card
