import React, { useRef, useState } from 'react'
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
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const handleCancel = (): void => {
    setIsEdited(false)
    console.log('canceled')
  }

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }
  const handleSaveClick = () => {
    setIsEdited(false)
    console.log('saving:', inputValue)
  }

  return (
    <div className={styles.cardFace}>
      <IconButton src={deleteIcon} label="edit" />
      <TextInput
        style={{ marginTop: '50px', marginBottom: '46px' }}
        onInputChange={handleInputChange}
      />
      <div className={styles.buttons}>
        <Button color="vite" onClick={handleCancel}>
          Cancel
        </Button>
        <Button color="accent" onClick={handleSaveClick}>
          Save
        </Button>
      </div>
    </div>
  )
}

export default EditModal
