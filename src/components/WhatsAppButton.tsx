import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/YOUR_PHONE_NUMBER"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25d366',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        zIndex: 1000,
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
      }}
      aria-label="WhatsApp Chat"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.backgroundColor = '#128C7E';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.backgroundColor = '#25d366';
      }}
    >
      <FaWhatsapp style={{ marginRight: '10px' }} />
    </a>
  );
};

export default WhatsAppButton;
