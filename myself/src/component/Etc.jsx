import ReactPlayer from 'react-player';

function Etc () {
    return (
        <>
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
            OTHER
          </h2>
        </div>
        <div>
            <h2>
                เวลาว่างได้ศึกษาสิ่งต่างๆ เพิ่มเติมได้แก่
            </h2>
        </div>
        <div style={{margin: '0 0 20px 0'}}>
            <h3>HTML พื้นฐาน</h3>
            <ReactPlayer url='https://www.youtube.com/watch?v=0hfeNPM7piw&t=1308s' width='auto' />
        </div>
        <div style={{margin: '0 0 20px 0'}}>
            <h3>REACT พื้นฐาน</h3>
            <ReactPlayer url='https://www.youtube.com/watch?v=KvNfS86KEA4&t=17331s' width='auto' />
        </div>
        <div style={{margin: '0 0 55px 0'}}>
            <h3>JavaScript พื้นฐาน</h3>
            <ReactPlayer url='https://www.youtube.com/watch?v=AbjY-ajKgSI&t=987s' width='auto' />
        </div>
        </>
    )
}

export default Etc