// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({ data }) => {
  const { name, phone, email, photo } = data;
  return (
    <div className='contact'>
      <div className='contact__avatar'>
        <img src={photo} alt={name} />
      </div>
      <div className='contact__info'>
        <p className='contact__info-txt text-bold'>{name}</p>
        <div className='contact__infodesc'>
          <p className='contact__infodesc-txt'>{phone}</p>
          <p className='contact__infodesc-txt'>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
