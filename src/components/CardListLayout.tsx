import React, { ReactElement, FC } from 'react'
import styles from './CardListLayout.module.css'
import Card from './Card'

interface CardData {
  id: number
  question: string
  answer: string
}

interface CardListProps {
  cards: CardData[]
}

const CardListLayout: FC<CardListProps> = ({ cards }): ReactElement => {
  return (
    <div className={styles.cardsContainer}>
      {cards.map((cards) => (
        <Card key={cards.id} question={cards.question} answer={cards.answer} />
      ))}
    </div>
  )
}

export default CardListLayout
