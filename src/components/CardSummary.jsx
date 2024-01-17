import React from 'react';

function CardSummary({ icon, label, value, colorIcon, backgrounIcon }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        padding: '1rem 2rem',
        color: '#313131',
      }}
    >
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          fontSize: '1.5rem',
          color: colorIcon,
          background: backgrounIcon,
          height: 50,
          width: 50,
          borderRadius: '50%',
        }}
      >
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{ marginBottom: '1rem', color: '#cacaca', fontSize: '1rem' }}
        >
          {label}
        </span>
        <h4 style={{ fontSize: '1.2rem' }}>{value}</h4>
      </div>
    </div>
  );
}

export default CardSummary;
