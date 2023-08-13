import { AppHeader } from './components/AppHeader'
import { AppLayout } from './components/AppLayout'
import './App.css'
import NewCard from './components/NewCard'
import { ReactElement } from 'react'

function App(): ReactElement {
  return (
    <AppLayout>
      <AppHeader />
      <NewCard />
    </AppLayout>
  )
}

export default App
