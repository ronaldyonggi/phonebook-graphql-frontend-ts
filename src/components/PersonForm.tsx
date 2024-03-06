import { gql, useMutation } from "@apollo/client"
import { SyntheticEvent, useState } from "react"
import InputTextItem from "./InputTextItem"

const CREATE_PERSON = gql`
  mutation createPerson($name: String!, $street: String!, $city: String!, $phone: String!) {
    addPerson (
      name: $name,
      street: $street,
      city: $city,
      phone: $phone
    ) {
      name
      phone
      id
      address {
        street
        city
      }
    }
  }
`

const PersonForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')

  const [ createPerson ] = useMutation(CREATE_PERSON)

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