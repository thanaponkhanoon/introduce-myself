function About() {
    return (
      <>
        <div style={{ margin: '70px 0 0 15px', display: 'flex', justifyContent: 'center' }}>
          <h1 style={{
            fontSize: '2.5em',
            fontWeight: 'bold',
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            background: '#282059',
            padding: '20px',
            borderRadius: '15px',
            border: '3px solid #d140f1',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out'
          }}>
            ABOUT STACK
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
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
            alt="JavaScript"
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
        <div style={{ margin: '0 0 0 15px', display: 'flex', gap: '20px' }}>
        
          <img
            src="https://img-resize-cdn.joshmartin.ch/768x0%2Cc3537b9f46b5f6055fbc8b4cd03b6b2cc63fc2eefd3d8cd9f0c9f99a5933e496/https://joshmartin.ch/app/uploads/2017/10/css3.svg"
            alt="CSS"
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
        <div style={{ margin: '0 0 0 15px', display: 'flex', gap: '20px' }}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
            alt="HTML"
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
            src="https://mui.com/static/logo.png"
            alt="MUI"
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
