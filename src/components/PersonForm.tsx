import { useMutation } from "@apollo/client"
import { SyntheticEvent, useState } from "react"
import InputTextItem from "./InputTextItem"
import { ALL_PERSONS, CREATE_PERSON } from "../graphql/person"

interface PersonFormProps {
  setError: (message: string) => void
}

const PersonForm = ({ setError } : PersonFormProps) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')

  const [ createPerson ] = useMutation(CREATE_PERSON, {
    // Re-query fetching all persons again once the addition of new person is complete
    refetchQueries: [ { query: ALL_PERSONS }],
    // Error handler
    onError: error => {
      const messages = error.graphQLErrors.map(e => e.message).join('\n')
      setError(messages)
    }
  })

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()

    createPerson({ variables: { name, phone, street, city} })

    setName('')
    setPhone('')
    setStreet('')
    setCity('')
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <InputTextItem label="name" value={name} setValue={setName} />
        <InputTextItem label="phone" value={phone} setValue={setPhone} />
        <InputTextItem label="street" value={street} setValue={setStreet} />
        <InputTextItem label="city" value={city} setValue={setCity} />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
export default PersonForm