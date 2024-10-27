function CreateContactForm({ onCreateContact}){
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const obj = Object.fromEntries(formData);
        const contact = {
            ...obj,
            id: Date.now(),
        }
  
        onCreateContact(contact);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" name="firstName" required></input>
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" name="lastName" required></input>
            </div>
            <div className="mb-3">
                <label htmlFor="birthdayDate" className="form-label">Birthday</label>
                <input type="date" className="form-control" id="birthdayDate" name="birthdayDate" required></input>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" required></input>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" name="phone" required></input>
            </div> 
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}


export default CreateContactForm;