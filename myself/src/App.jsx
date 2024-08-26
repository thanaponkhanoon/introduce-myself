import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Appbar from './component/Appbar';
import About from './component/About';
import Education from './component/Education';
import Experience from './component/Experience';
import BackToTop from './component/BackToTop'; 
import Project from './component/Project';
import Personal from './component/Personal';

const GlobalStyles = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <div style={styles.container}>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
        <BackToTop />
      </div>
    </Router>
  );
};

const styles = {
  container: {
    backgroundImage: "url('https://img.freepik.com/free-photo/fuji-mountain-with-milky-way-night_335224-104.jpg?t=st=1724510340~exp=1724513940~hmac=127c4eb30ec91679202a9b0035e15f1a2d518af5eea4af0e0549dfdafc7f4be1&w=1060')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
};

export default App;
