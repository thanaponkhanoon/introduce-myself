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
              <span>
                2019-2024 Bachelor of engineering in Computer engineering, Suranaree University of Technology, Nakhon Ratchasima
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src="../picture/student.jpg"
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
                src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/309040000_523448236256689_6987209146456801409_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGqmDRzS8iGGz39uFouvPGf33UV-BoiY4vfdRX4GiJji4AClbSiAlLRE9KZfxQHxONWN1JtgJ5CnScw0BD0aH52&_nc_ohc=F9nwh0j-MjcQ7kNvgHmUtZG&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&oh=00_AYBZoui3VuljT2jPapqe1_9wLRD1q6-oSG7Q06yFBylkWg&oe=66D1087A"
                alt="Kamphaeng Logo"
                style={{
                  width: '100px',
                  height: 'auto',
                  margin: '0 10px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <span>
                2013-2018 Graduated from high school in science and mathematics and junior high school at Kamphaeng School.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Education;
  