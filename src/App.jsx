import { useState } from "react";
import ContactsList from "./components/ContactsList";
import CreateContactForm from "./components/CreateContactForm";
import ContactDetails from "./components/ContactDetails";
import EditContactForm from "./components/EditContactForm";
import SearchInput from "./components/SearchInput";
import filterContacts from "./utils/filterContacts";
import { saveContactListToLocalStorage } from "./utils/localStorage";
import { getContactListFromLocalStorage } from "./utils/localStorage";

function App() {
  const [contactsList, setContactsList] = useState(getContactListFromLocalStorage());
  const [appState, setAppState] = useState("DEFAULT");
  const [activeContactId, setActiveContactId] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const activeContact = contactsList.find(
    (contact) => contact.id === activeContactId
  );
  const filteredContacts = filterContacts(contactsList, searchValue);
  const isEmptySearch = searchValue.length > 0 && filteredContacts.length === 0;

  const handleAddNewClick = () => {
    setAppState("CREATE_CONTACT");
    setActiveContactId(null);
  };

  const handleCreateContact = (newContact) => {
    setContactsList([...contactsList, newContact]);

  
    saveContactListToLocalStorage([...contactsList, newContact]);
    setActiveContactId(newContact.id);
    setAppState("VIEW_CONTACT");
  };

  const handleContactClick = (contactId) => {
    setAppState("VIEW_CONTACT");
    setActiveContactId(contactId);
  };

  const handleEditContact = () => {
    setAppState("EDIT_CONTACT");
  };

  const handleCancelEditContact = () => {
    setAppState("VIEW_CONTACT");
  };

  const handleUpdateContact = (updatedContact) => {
    const newContactsList = contactsList.map(contact => {
      if(contact.id === updatedContact.id){
        return updatedContact;
      }else return contact;
    })

    setContactsList(newContactsList);
    saveContactListToLocalStorage(newContactsList);



    setAppState("CREATE_CONTACT")
    // console.log(updatedContact);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    
  }

  return (
    <div className="d-flex align-items-stretch">
      <div className="col-4 p-4">
        <div className="row align-items-center mb-3">
          
          <div className="col-8">
            <SearchInput value={searchValue} onChange={handleSearchChange}/>
          </div>
          <div className="col-4">
            <button
              className="btn btn-primary w-100"
              onClick={handleAddNewClick}
            >
              Add new
            </button>
          </div>
        </div>

        <ContactsList
          items={filteredContacts}
          onContactClick={handleContactClick}
          activeContactId={activeContactId}
        />
      </div>
      {isEmptySearch ? (
        <div className="col-8 p-3">
          <h2>Empty search results</h2>
        </div>
      ) : (

      <div className="col-8 p-3">
        {appState === "CREATE_CONTACT" && (
          <CreateContactForm onCreateContact={handleCreateContact} />
        )}
        {appState === "VIEW_CONTACT" && (
          <ContactDetails
            contact={activeContact}
            onEditContact={handleEditContact}
          />
        )}
        {appState === "EDIT_CONTACT" && (
          <EditContactForm
            contact={activeContact}
            onCancel={handleCancelEditContact}
            onUpdateContact={handleUpdateContact}
          />
        )}
      </div>
      )}
    </div>
  );
}

export default App;
