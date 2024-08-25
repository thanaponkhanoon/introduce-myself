import { useState } from 'react';

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
      }}
    >
      <h1
        style={{
          ...styles.text,
          ...(isHovered && styles.textHover),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Welcome To My Website
      </h1>
    </div>
  );
}

const styles = {
  text: {
    color: '#f5f5f5',
    fontSize: '3rem',
    animation: 'pulse 2s infinite',
    transition: 'color 0.5s ease',
    cursor: 'pointer',
    textShadow: '2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000',
  },
  textHover: {
    color: '#9c02f5',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      color: '#f5f5f5',
    },
    '50%': {
      transform: 'scale(1.1)',
      color: '#6600ff',
    },
    '100%': {
      transform: 'scale(1)',
      color: '#f5f5f5',
    },
  },
};

export default Home;
