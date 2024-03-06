import { useMutation } from "@apollo/client"
import { SyntheticEvent, useState } from "react"
import InputTextItem from "./InputTextItem"
import { ALL_PERSONS, CREATE_PERSON } from "../graphql/person"

const PersonForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')

  const [ createPerson ] = useMutation(CREATE_PERSON, {
    // Re-query fetching all persons again once the addition of new person is complete
    refetchQueries: [ { query: ALL_PERSONS }]
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
        <InputTextItem label="name" setValue={setName} />
        <InputTextItem label="phone" setValue={setPhone} />
        <InputTextItem label="street" setValue={setStreet} />
        <InputTextItem label="city" setValue={setCity} />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
export default PersonForm