import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function Project() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const par = { margin: isMobile ? '10px 0' : '20px 0 10px 60px', color: 'whitesmoke' };
    const boxStyle = { 
        width: isMobile ? '100%' : '1000px',
        height: 'auto', 
        margin: '20px auto',
        border: '1px dashed black',
    };

    // Initialize the default layout plugin without using 'defaultTabs'
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: () => [], // Hide the sidebar without using the 'defaultTabs' parameter
    });

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
            MY PROJECT
          </h2>
        </div>
        <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', margin: '0 80px 0 80px', color: 'white'}}>  
        <Box component="section" sx={{ p: 2, border: '1px dashed black' }} style={boxStyle}>
            <div style={{margin: '0px 20px 0 20px'}}>
                <span>
                    <h2>
                    2023 : Software Engineer 523332 <small style={{ fontSize: '18px' }}>(ระบบห้องสมุด)</small>
                    <a
                        href="https://github.com/sut65/team04/tree/main"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Typography variant="body1" sx={{ mr: 1 ,color: '#d140f1'}}>
                            GitHub SE SUT65 Team04
                        </Typography>
                        <IconButton size="large" color="inherit">
                            <GitHubIcon style={{ color: '#d140f1' }} />
                        </IconButton>
                    </a>
                    <a
                        href="https://web.facebook.com/profile.php?id=100087967613356"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Typography variant="body1" sx={{ mr: 1 ,color: 'blue'}}>
                            Sut-Se65-Team04 
                        </Typography>
                        <IconButton size="large" color="inherit">
                            <FacebookIcon style={{ color: '#3314e3' }} />
                        </IconButton>
                    </a>
                    </h2>
                </span>
                <strong style={{ fontSize: '18px', margin: '0 0 0 20px'}}>ระบบหลัก ระบบห้องสมุด</strong>
                <span>
                    <h3 style={{margin: '20px 0 10px 40px'}}>
                        เป็นระบบที่ประกอบไปด้วยระบบย่อยทั้งหมด 12 ระบบย่อย โดยระบบที่ผมได้รับผิดชอบ 2 ระบบย่อย ได้แก่
                    </h3>
                    <div style={par}>
                        <strong>1. ระบบแจ้งซ่อมหนังสือ</strong><br/>
                        มีระบบแจ้งซ่อมหนังสือ เพื่ออำนวยความสะดวกให้แก่บรรณารักษ์สามารถแจ้งซ่อมหนังสือและ
                        สามารถตรวจสอบการแจ้งซ่อมหนังสือย้อนหลังได้
                    </div>
                    <div style={par}>
                        <strong>2. ระบบแจ้งซ่อมอุปกรณ์</strong><br/>
                        มีระบบแจ้งซ่อมอุปกรณ์ เพื่ออำนวยความสะดวกให้แก่บรรณารักษ์สามารถแจ้งซ่อมอุปกรณ์
                        และสามารถตรวจสอบการแจ้งซ่อมอุปกรณ์ย้อนหลังได้
                    </div>
                </span>
                <strong style={{ fontSize: '18px', margin: '0 0 0 20px'}}>Stack ที่ใช้</strong>
                <div style={{
        margin: '0px 15px 35px 15px', 
        display: 'flex', 
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {[
          {
            src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            alt: "React"
          },
          {
            src: "https://miro.medium.com/v2/resize:fit:600/1*i2skbfmDsHayHhqPfwt6pA.png",
            alt: "Golang"
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
            alt: "TypeScript"
          },
          {
            src: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
            alt: "Node JS"
          },
          {
            src: "https://mui.com/static/logo.png",
            alt: "MUI"
          }
        ].map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
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
              '@media (max-width: 768px)': {
                width: '100px',
                height: '100px',
              }
            }}
          />
        ))}
      </div>
            </div>
            {/* <strong style={{ fontSize: '18px', margin: '0 0 0 40px'}}>เอกสารรายงาน</strong>
            Display PDF in a framed area
            <div style={{ margin: '20px auto', width: isMobile ? '100%' : '80%', height: '900px', overflow: 'auto', padding: '10px' }}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer
                        fileUrl="../picture/G04-ระบบห้องสมุด.pdf"
                        plugins={[defaultLayoutPluginInstance]}
                        initialPage={8} // Start from the first page
                    />
                </Worker>
            </div> */}
            </Box>
        </div>
        <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', margin: '0 80px 55px 80px', color: 'white'}}>  
        <Box component="section" sx={{ p: 2, border: '1px dashed black' }} style={boxStyle}>
            <div style={{margin: '0 0 0 20px'}}>
                <span>
                    <h2>
                    2023 : System Analysis And Design 523331 <small style={{ fontSize: '18px' }}>(ระบบการจองใช้ห้อง)</small>
                    <a
                        href="https://github.com/thanaponkhanoon/sa-65-example"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Typography variant="body1" sx={{ mr: 1 ,color: '#d140f1'}}>
                            GitHub SA SUT65 ระบบบันทึกข้อมูลอุปกรณ์
                        </Typography>
                        <IconButton size="large" color="inherit">
                            <GitHubIcon style={{ color: '#d140f1' }} />
                        </IconButton>
                    </a>
                    <small>หรือ</small>
                    <a
                        href="https://github.com/Siriwan38/Sa-65-Group-18"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Typography variant="body1" sx={{ mr: 1 ,color: '#d140f1'}}>
                            GitHub SA SUT65 Team18
                        </Typography>
                        <IconButton size="large" color="inherit">
                            <GitHubIcon style={{ color: '#d140f1' }} />
                        </IconButton>
                    </a>
                    </h2>
                </span>
                <strong style={{ fontSize: '18px', margin: '0 0 0 20px'}}>ระบบหลัก ระบบการจองใช้ห้อง</strong>
                <span>
                    <h3 style={{margin: '20px 0 10px 40px'}}>
                        เป็นระบบที่ประกอบไปด้วยระบบย่อยทั้งหมด 7 ระบบย่อย โดยระบบที่ผมได้รับผิดชอบ 1 ระบบย่อย ได้แก่
                    </h3>
                    <div style={par}>
                        <strong>ระบบบันทึกข้อมูลอุปกรณ์</strong><br/>
                        เป็นระบบที่บอกรายละเอียดของข้อมูลอุ ปกรณ์ทั้งหมดมีอะไรบ้างทั้งที่มีให้ในห้องและอุปกรณ์ที่สามารถให้สมาชิกระบบ
                        จองใช้ห้องดูอุปกรณ์เสริมได้ เช่น หมายเลขอุปกรณ์ประเภทของอุปกรณ์รวมถึงหากอุปกรณ์ชารุดหรือเสียหาย
                    </div>
                </span>
                <strong style={{ fontSize: '18px', margin: '0 0 0 20px'}}>Stack ที่ใช้</strong>
                <div style={{
        margin: '0px 15px 35px 15px', 
        display: 'flex', 
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {[
          {
            src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            alt: "React"
          },
          {
            src: "https://miro.medium.com/v2/resize:fit:600/1*i2skbfmDsHayHhqPfwt6pA.png",
            alt: "Golang"
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
            alt: "TypeScript"
          },
          {
            src: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
            alt: "Node JS"
          },
          {
            src: "https://mui.com/static/logo.png",
            alt: "MUI"
          }
        ].map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
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
              '@media (max-width: 768px)': {
                width: '100px',
                height: '100px',
              }
            }}
          />
        ))}
      </div>
            </div>
            {/* <strong style={{ fontSize: '18px', margin: '0 0 0 40px'}}>เอกสารรายงาน</strong>
            Display PDF in a framed area
            <div style={{ margin: '20px auto', width: isMobile ? '100%' : '80%', height: '900px', overflow: 'auto', padding: '10px' }}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer
                        fileUrl="../picture/FinalEdit1-B6220655-DEVICE.pdf"
                        plugins={[defaultLayoutPluginInstance]}
                        initialPage={1} // Start from the first page
                    />
                </Worker>
            </div> */}
            </Box>
        </div>
        </>
    );
}

export default Project;
