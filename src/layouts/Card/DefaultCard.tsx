import React from 'react'
import styles from './Card.module.css'
import IconButton from '../../components/IconButton/IconButton'
import EditButton from '@images/EditButton.svg'
type DefaultCardProps = {
  onEditBtn: () => void
  text: string
  cardSide: 'front' | 'back'
  // flip: () => void
}
const DefaultCard: React.FC<DefaultCardProps> = ({
  cardSide,
  onEditBtn,
  text,
}) => {
  return (
    <div
      className={`${styles.defaultCardWrapper} ${
        cardSide === 'front' ? styles.front : styles.back
      }`}
    >
      <IconButton src={EditButton} setEdit={onEditBtn} />
      <div className={styles.cardContent}>{text}</div>
    </div>
  )
}

export default DefaultCard
