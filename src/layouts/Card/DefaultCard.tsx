import React from 'react'
import styles from './Card.module.css'
import IconButton from '../../components/IconButton/IconButton'
import EditButton from '@images/EditButton.svg'
type DefaultCardProps = {
  onEditBtn: () => void
  text: string
  flip: () => void
}
const DefaultCard: React.FC<DefaultCardProps> = ({ flip, onEditBtn, text }) => {
  return (
    <div
      className={`${styles.card} ${text === 'question' ? styles.card : ''}`}
      onClick={flip}
    >
      <IconButton src={EditButton} setEdit={onEditBtn} />
      <div className={styles.cardContent}>{text}</div>
    </div>
  )
}

export default DefaultCard
