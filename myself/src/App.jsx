import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Appbar from './component/Appbar';
import Education from './component/Education';

const background = {
  backgroundColor: 'lightblue', // สีพื้นหลัง
  height: '100vh', // ความสูงเต็มหน้าจอ
  width: 'auto',
  backgroundSize: 'cover',
  display: 'flex', // การจัดวางแนวตั้ง
  //justifyContent: 'center', // จัดแนวแนวนอน
  //alignItems: 'center' // จัดแนวแนวนอน
};

function App() {
  return (
    <>
    <Router>
      <div style={background}>
        <Appbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </Router>
      
    </>
  )
}

export default App
