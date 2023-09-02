import { AppHeader } from './layouts/AppHeader/AppHeader'
import { AppLayout } from './layouts/AppLayout/AppLayout'
import './App.css'
import NewCard from './layouts/NewCard/NewCard'
import Card from './layouts/Card/Card'
import { ReactElement, useState } from 'react'
import CardListLayout from './layouts/CardList/CardListLayout'

export interface Iflashcard {
  question: string
  answer: string
  id?: number
}
function App(): ReactElement {
  const [cardsList, setCardsList] = useState<Iflashcard[]>([
    // {
    //   // id: 1,
    //   question: 'What is the syntax for declaring a variable in JavaScript?',
    //   answer: 'Content for Card 1',
    // },
    // {
    //   // id: 2,
    //   question: 'How do you write a comment in Javascript?',
    //   answer: 'Content for Card 2',
    // },
    // {
    //   // id: 3,
    //   question:
    //     'What is difference between == and === operators in javascript?',
    //   answer: 'Content for Card 3',
    // },
    // {
    //   // id: 4,
    //   question: 'What is an array in JavaScript?',
    //   answer: 'Content for Card 4',
    // },
  ])
  const [isAdded, setIsAdded] = useState<boolean>(false)
  const handleAddCard = () => {
    setIsAdded((prev) => !prev)
  }
  const handleCancel = () => {
    setIsAdded(false)
    console.log('cancel')
  }
  const handleSave = (flashCard: Iflashcard) => {
    const id = Date.now()
    const newFlashCard = { ...flashCard, id }
    setCardsList([...cardsList, newFlashCard])
    console.log(cardsList)
  }
  return (
    <AppLayout>
      <AppHeader cardsQty={cardsList.length} onClick={handleAddCard} />
      <CardListLayout cardsList={cardsList} />
      {isAdded && <NewCard onCancel={handleCancel} onSave={handleSave} />}
    </AppLayout>
  )
}

export default App
