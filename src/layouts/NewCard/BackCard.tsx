import Button from '../../components/Button/Button'
import TextInput from '../../components/TextInput/TextInput'
import styles from './NewCard.module.css'
import DeleteButton from '@images/DeleteButton.svg'
import IconButton from '../../components/IconButton/IconButton'
import { ReactElement } from 'react'

interface BackCardProps {
  handleFlip: (e: React.MouseEvent) => void
}
export const BackCard = ({ handleFlip }: BackCardProps): ReactElement => {
  return (
    <div className={styles.cardFace}>
      <span className={styles.card_text}>Ii pesce</span>
      <IconButton
        className={styles.deleteBtn}
        src={DeleteButton}
        label="delete"
        // onClick={() => console.log('delete')}
      />
      <TextInput style={{ marginTop: '8px', marginBottom: '24px' }} />
      <div className={styles.buttons}>
        <Button color="vite" onClick={handleFlip}>
          {' '}
          Back
        </Button>
        <Button color="accent"> Save</Button>
      </div>
    </div>
  )
}
