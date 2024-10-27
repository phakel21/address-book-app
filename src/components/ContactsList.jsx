function ContactsList({items, onContactClick, activeContactId}){
    return(
        <div className='list-group'>
          {items.map( contact => (
             <a 
             key={contact.id} 
             href='#' 
             className={`list-group-item ${contact.id === activeContactId ? 'active' : ''}`}
             onClick={() => onContactClick(contact.id)}
             >
              <h5>{contact.firstName} {contact.lastName}</h5>
            </a>
          ))}
        </div>
    )
}

export default ContactsList;