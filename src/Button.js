import React from 'react';

const Button = ({ label, onClick }) => (
  <button onClick={onClick} style={{ padding: '10px', backgroundColor: 'blue', color: 'white', borderRadius: '5px' }}>
    {label}
  </button>
);

export default Button;