import { useState } from 'react'
import styles from './AppHeader.module.css'
import MainLogo from '@images/MainLogo.svg'
import AddNewLogo from '@images/AddNew.svg'

export const AppHeader = () => {
  const [cards, setCards] = useState<number>(0)

  const handleAddNewCard = () => {
    setCards((previous) => previous + 1)
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo_wrapper}>
        <img src={MainLogo} alt="logo" />
        <span>Cards: {cards}</span>
      </div>
      <div>
        <button className={styles.btn} onClick={handleAddNewCard}>
          <img src={AddNewLogo} alt="Add_new" />
        </button>
      </div>
    </header>
  )
}
