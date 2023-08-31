import React, { ReactElement, FC } from 'react'
import styles from './CardListLayout.module.css'
import Card from '../Card/Card'

const CardListLayout: FC = ({ cardsList }: any): ReactElement => {
  return (
    <div className={styles.cardsContainer}>
      {cardsList.map(
        (cardsList: { id: React.Key; question: string; answer: string }) => (
          <Card
            key={cardsList.id}
            question={cardsList.question}
            answer={cardsList.answer}
          />
        )
      )}
    </div>
  )
}

export default CardListLayout
