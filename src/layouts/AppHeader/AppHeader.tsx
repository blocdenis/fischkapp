// import { useState } from 'react'
import styles from './AppHeader.module.css'
import MainLogo from '@images/MainLogo.svg'
import AddNewLogo from '@images/AddNew.svg'

interface AppHeaderProps {
  onClick: (e: React.MouseEvent) => void
  cardsQty: number
}
export const AppHeader = ({ cardsQty, onClick }: AppHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_wrapper}>
        <img src={MainLogo} alt="logo" />
        <span>Cards: {cardsQty}</span>
      </div>
      <div>
        <button className={styles.btn} onClick={onClick}>
          <img src={AddNewLogo} alt="Add_new" />
        </button>
      </div>
    </header>
  )
}
