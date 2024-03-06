import { useQuery } from "@apollo/client"
import { useState } from "react"
import { Person } from "../types"
import PersonItem from "./PersonItem"
import { FIND_PERSON } from "../graphql/person"

interface PersonsProps {
  persons: Array<Person>
}

const Persons = ({ persons }: PersonsProps ) => {
  const [nameToSearch, setNameToSearch] = useState<string | null>(null)
  const result = useQuery(FIND_PERSON, {
    variables: { nameToSearch },
    skip: !nameToSearch
  })

  // If name search is provided and a matching name is found, execute the following:
  if (nameToSearch && result.data) {
    return (
      <PersonItem 
        person={result.data.findPerson}
        onClose = {() => setNameToSearch(null)}
      />
    )
  }

  return (
    <div>
      <h2>Persons</h2>
      {persons.map(p => 
        <div key={p.name}>
          {p.name} {p.phone}
          <button onClick={() => setNameToSearch(p.name)}>
            show address
          </button>
        </div>
        )}
    </div>
  )
}
export default Persons