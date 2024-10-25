import React from 'react';

const Hello = ({ label, onClick }) => (
    <>
        <button onClick={onClick} style={{ padding: '10px', backgroundColor: 'blue', color: 'white', borderRadius: '5px' }}>
            {label}
        </button>
        <div>
            Hello
        </div>
    </>
);

export default Hello;