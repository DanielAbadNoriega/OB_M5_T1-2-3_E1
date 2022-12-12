import React from 'react';
import { Contact } from '../models/contact.class';
import ContactComponent from '../pure/contact_component';


const ContactList = () => {

  const contact = new Contact("Daniel", "Abad", "daniel.abad.noriega@gmail.com", true);

  return (
    <div>
      <h1>Contactos</h1>
      <ContactComponent contact = { contact }></ContactComponent>
    </div>
  );
}

export default ContactList;
