import { useMutation } from "@apollo/client"
import { SyntheticEvent, useEffect, useState } from "react"
import { EDIT_NUMBER } from "../graphql/person"
import InputTextItem from "./InputTextItem"

interface ChangeNumberFormProps {
  setError: (message: string) => void
}

const ChangeNumberForm = ({ setError }: ChangeNumberFormProps) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const [ changeNumber, result ] = useMutation(EDIT_NUMBER)

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    changeNumber({ variables: { name, phone } })
    setName('')
    setPhone('')
  }

  
  return (
    <div>
      <h2>Change Number</h2>
      <form onSubmit={handleSubmit}>
        <InputTextItem label="name" value={name} setValue={setName} />
        <InputTextItem label="phone" value={phone} setValue={setPhone} />
        <button type="submit">change number</button>
      </form>
    </div>
  )
}
export default ChangeNumberForm