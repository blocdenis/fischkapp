import Button from '../../components/Button/Button'
import TextInput from '../../components/TextInput/TextInput'
import styles from './NewCard.module.css'
import DeleteButton from '@images/DeleteButton.svg'
import IconButton from '../../components/IconButton/IconButton'

export const BackCard = () => {
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
        <Button color="vite"> Back</Button>
        <Button color="accent"> Save</Button>
      </div>
    </div>
  )
}
