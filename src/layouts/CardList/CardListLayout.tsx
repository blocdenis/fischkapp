import React, { ReactElement, FC } from 'react'
import styles from './CardListLayout.module.css'
import Card from '../Card/Card'
import { Iflashcard } from 'App'

interface CardsListComponent {
  cardsList: Iflashcard[]
}
const CardListLayout: FC<CardsListComponent> = ({ cardsList }) => {
  return (
    <ul className={styles.cardsContainer}>
      {cardsList.map(({ question, answer, id }) => (
        <li key={id}>
          <Card question={question} answer={answer} />
        </li>
      ))}
    </ul>
  )
}

export default CardListLayout
