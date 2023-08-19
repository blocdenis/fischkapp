import { AppHeader } from './layouts/AppHeader/AppHeader'
import { AppLayout } from './layouts/AppLayout/AppLayout'
import './App.css'
// import NewCard from './components/NewCard'
import Card from './layouts/Card/Card'
import { ReactElement } from 'react'
import CardListLayout from './layouts/CardList/CardListLayout'

function App(): ReactElement {
  const cards = [
    {
      id: 1,
      question: 'What is the syntax for declaring a variable in JavaScript?',
      answer: 'Content for Card 1',
    },
    {
      id: 2,
      question: 'How do you write a comment in Javascript?',
      answer: 'Content for Card 2',
    },
    {
      id: 3,
      question:
        'What is difference between == and === operators in javascript?',
      answer: 'Content for Card 3',
    },
    {
      id: 4,
      question: 'What is an array in JavaScript?',
      answer: 'Content for Card 4',
    },
  ]
  return (
    <AppLayout>
      <AppHeader />
      <CardListLayout cards={cards} />
      {/* <NewCard /> */}
    </AppLayout>
  )
}

export default App
