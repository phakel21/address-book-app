
const filterContacts = (contacts, filteredValue) => contacts.filter(contact => 
    contact.firstName.toLowerCase().includes(filteredValue.toLowerCase()) || 
    contact.lastName.toLowerCase().includes(filteredValue.toLowerCase())
  );

  export default filterContacts;