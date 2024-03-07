import { useQuery } from '@apollo/client';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import { ALL_PERSONS } from './graphql/person';
import { useState } from 'react';
import ErrorNotification from './components/ErrorNotification';
import ChangeNumberForm from './components/ChangeNumberForm';

const App = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const result = useQuery(ALL_PERSONS);

  const notificationHelper = (message: string) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000);
  }

  if (result.loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <ErrorNotification message={errorMessage} />
      <Persons persons={result.data.allPersons} />
      <PersonForm setError={notificationHelper} />
      <ChangeNumberForm setError={notificationHelper} />
    </div>
  );
};

export default App;
