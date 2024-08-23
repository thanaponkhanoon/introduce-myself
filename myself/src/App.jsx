import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import myImage from '../picture/StockCake-Creative Desktop Setup_1723891320.jpg';

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
    <div style={background}>
      <AppBar 
        position='fixed'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <img src={myImage} alt="Description of image" style={{margin: '60px 0 0 15px', width: '200px', height: '200px', border: '2px solid black' }} />
      <div style={{margin: '60px 0 0 40px'}}>
        <h2>
          CAREER
        </h2>
        <span>
        I am a new graduate interested in the position of Junior Full Stack Developer, able to coordinate with others. and have high computer skills Where I can apply my skills to your team success.
        </span>
      </div>
      </div>
    </>
  )
}

export default App
