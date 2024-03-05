import { Person } from "../types"

interface PersonItemProps {
  person: Person
  onClose: () => void
}

const PersonItem = ({ person, onClose }: PersonItemProps) => {
  return (
    <div>
      <h2>{ person.name }</h2>
      <div>
        {person.address.street} {person.address.city}
      </div>
      <div>{person.phone}</div>
      <button onClick={onClose}>Close</button>
    </div>
  )
}
export default PersonItem