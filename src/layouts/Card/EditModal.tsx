import React from 'react'
import styles from '../Card/Card.module.css'
import IconButton from '../../components/IconButton/IconButton'
import TextInput from '../../components/TextInput/TextInput'
import Button from '../../components/Button/Button'
// import editIcon from '@images/EditButton.svg'
import deleteIcon from '@images/DeleteButton.svg'

interface EditModalProps {
  setIsEdited: (status: boolean) => void
}

const EditModal = ({ setIsEdited }: EditModalProps) => {
  const handleCancel = (): void => {
    setIsEdited(false)
    console.log('canceled')
  }
  return (
    <div className={styles.cardFace}>
      <IconButton src={deleteIcon} label="edit" />
      <TextInput style={{ marginTop: '50px', marginBottom: '46px' }} />
      <div className={styles.buttons}>
        <Button color="vite" onClick={handleCancel}>
          Cancel
        </Button>
        <Button color="accent">Save</Button>
      </div>
    </div>
  )
}

export default EditModal
