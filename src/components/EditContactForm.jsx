function EditContactForm({contact, onUpdateContact, onCancel}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const obj = Object.fromEntries(formData);
        const updatedContact = {
            ...obj,
            id: contact.id
        }

        onUpdateContact(updatedContact);
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          required
          defaultValue={contact.firstName}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          required
          defaultValue={contact.lastName}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="birthdayDate" className="form-label">
          Birthday
        </label>
        <input
          type="date"
          className="form-control"
          id="birthdayDate"
          name="birthdayDate"
          required
          defaultValue={contact.birthdayDate}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          required
          defaultValue={contact.email}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          required
          defaultValue={contact.phone}
        ></input>
      </div>
      <div>
        <button type="submit" className="btn btn-primary me-3">Submit</button>
        <button  onClick={onCancel} type="button" className="btn btn-secondary">Cancel</button>
      </div>
    </form>
  );
}

export default EditContactForm;
