import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Toaster } from 'react-hot-toast';


export const App = () => {
 
  return (
    <>
      <ContactsForm />
      <Filter />
      <ContactsList />
      <Toaster />
    </>
  );
};
