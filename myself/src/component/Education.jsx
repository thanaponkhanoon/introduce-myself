function Education() {
    return (
      <div style={{ color: 'white', padding: '10px' }}>
        <div style={{ margin: '50px 15px 0 15px', display: 'flex', justifyContent: 'center' }}>
          <h2
            style={{
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
              transition: 'transform 0.3s ease-in-out',
              width: 'fit-content',
            }}
          >
            EDUCATION
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
          <img
            src="https://reg7.sut.ac.th/registrar/fileuploadgraduateimg.asp?appcode=B6220655&docid=11&sttype=28"
            alt="Description of image"
            style={{
              width: '150px',
              height: '212px',
              border: '2px solid white',
              borderRadius: '20px',
              objectFit: 'contain',
              marginBottom: '20px',
            }}
          />
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 5px 0' }}>Bachelor Degrees</h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/th/7/7b/SUT_LOGO.png"
                alt="SUT Logo"
                style={{
                  width: '100px',
                  height: 'auto',
                  margin: '0 10px',
                }}
              />
              <span style={{color: 'whitesmoke'}}>
                2019-2024 Bachelor of engineering in Computer engineering, Suranaree University of Technology, Nakhon Ratchasima
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/457137036_2209843539379037_6645935567311944750_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHpYSKe9_a0n_4AxlCX1XbzaHH_jx7QU_tocf-PHtBT-87ePeP0zzwI8PwmHiTNrUIg1ehStk2v9F86D954jdBI&_nc_ohc=_flZ3WrqUssQ7kNvgGTvlv9&_nc_zt=23&_nc_ht=scontent.fbkk22-1.fna&_nc_gid=Afw7LBk50qy6oXLKq_Uz2Uk&oh=00_AYBkws5zB5U0OR_Ej-O6UUz7VviWHmbmkMmGpRGh25m6og&oe=67004574"
            alt="Description of image"
            style={{
              width: '150px',
              height: '212px',
              border: '2px solid white',
              borderRadius: '20px',
              objectFit: 'contain',
              marginBottom: '20px',
            }}
          />
          <div style={{ textAlign: 'center', margin: '0 0 55px 0' }}>
            <h3 style={{ margin: '10px 0' }}>Senior high school and Junior high school</h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtR-RZ3OVa5wEs4wfM9mcYUWqBwSZ7heTy7w&s"
                alt="Kamphaeng Logo"
                style={{
                  width: '100px',
                  height: 'auto',
                  margin: '0 10px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <span style={{color: 'whitesmoke'}}>
                2013-2018 Graduated from high school in science and mathematics and junior high school at Kamphaeng School.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Education;
  