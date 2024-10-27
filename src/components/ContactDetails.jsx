function ContactDetails({contact, onEditContact}){

    return(
        <div>
            <div className="row align-items-center mb-3">
                <div className="col-4">
                    <h2>Contact Details:</h2>
                </div>
            </div>
            <ol className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">First Name:</div>
                        {contact.firstName}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Last Name:</div>
                        {contact.lastName}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Birthday:</div>
                        {contact.birthdayDate}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Email:</div>
                        {contact.email}
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Phone:</div>
                        {contact.phone}
                    </div>
                </li>
            </ol>
            <button type="button" className="btn btn-secondary" onClick={onEditContact}>Edit contact</button>
        </div>
    )

}

export default ContactDetails;