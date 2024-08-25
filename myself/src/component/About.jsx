function About() {
    return (
      <>
        <div style={{ margin: '70px 0 0 15px', display: 'flex', justifyContent: 'center' }}>
          <h1 style={{
            fontSize: '2.5em',
            fontWeight: 'bold',
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            background: '#483D8B',
            padding: '20px',
            borderRadius: '15px',
            border: '3px solid #d140f1',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out'
          }}>
            About Stack
          </h1>
        </div>
        <div style={{ margin: '50px 0 0 15px', display: 'flex', gap: '20px' }}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt="React"
            style={{
              marginTop: '20px',
              width: '150px',
              height: '150px',
              border: '5px solid #2c003e',
              padding: '5px',
              boxSizing: 'border-box',
              borderRadius: '10px',
              borderStyle: 'solid',
              borderWidth: '2px',
              borderColor: 'blue',
              backgroundColor: '#0f0c29',
            }}
          />
          <img
            src="https://vitejs.dev/logo-with-shadow.png"
            alt="Vite"
            style={{
              marginTop: '20px',
              width: '150px',
              height: '150px',
              border: '5px solid #2c003e',
              padding: '5px',
              boxSizing: 'border-box',
              borderRadius: '10px',
              borderStyle: 'solid',
              borderWidth: '2px',
              borderColor: 'blue',
              backgroundColor: '#0f0c29',
            }}
          />
        </div>
      </>
    );
  }
  
  export default About;
