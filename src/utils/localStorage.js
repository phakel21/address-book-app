export const saveContactListToLocalStorage = (contacts) => {
    const contactString = JSON.stringify(contacts);
    localStorage.setItem('contactsList', contactString);
}

export const getContactListFromLocalStorage = () => {
    const contactsListString = localStorage.getItem('contactsList'); 
    if(contactsListString){
        return JSON.parse(contactsListString);
    } else return [];
}