import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const par = { margin: isMobile ? '10px 0' : '20px 0 10px 60px' };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        padding: '0 10px',
        textAlign: 'center',
      }}
    >
      <div>
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
      <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', margin: isMobile ? '0 50px 55px 50px' : '0 200px 55px 200px' , color: 'whitesmoke'}}>  
            <div style={{margin: '0px 20px 0 20px'}}>
                <span>
                    <div style={par}>
                    สวัสดีครับ ผมชื่อนายธนพล ไชยนิตย์ ชื่อเล่น ขนุน จบการศึกษาจากมหาวิทยาลัยเทคโนโลยีสุรนารี 
                    สำนักวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์ ได้รับการอนุมัติจบการศึกษาเมื่อวันที่ 25 พฤษภาคม 2567
                    ผมมีความสนใจในงานด้านเว็บไซต์ โดยเฉพาะด้าน Front-End และยังสนใจในด้าน Full Stack Back-End ด้วย 
                    ผมมีพื้นฐานที่ดีในการพัฒนาเว็บด้วย HTML, CSS, JavaScript และ React.js 
                    ระหว่างเรียน ผมได้มีโอกาสทำโปรเจกต์ที่เกี่ยวข้องกับการพัฒนาเว็บไซต์ ซึ่งช่วยให้ผมฝึกฝนทักษะการเขียนโค้ด
                    และการทำงานร่วมกับทีม นอกจากนี้ผมมีประสบการณ์ทำงานในตำแหน่ง IT Application Support Officer 
                    และมีประสบการณ์จากสหกิจศึกษาในตำแหน่ง Software Engineer
                    </div>
                    <div style={par}>
                    ผมเป็นคนที่มีความตั้งใจในการเรียนรู้สิ่งใหม่ ๆ และพัฒนาทักษะของตัวเองอยู่เสมอ ผมเชื่อว่าด้วยความมุ่งมั่น
                    ของผม ผมจะสามารถมีส่วนร่วมในการสร้างสรรค์ผลงานที่ดี และมีคุณค่าให้กับองค์กรได้ผมหวังว่าจะมีโอกาส
                    ได้ร่วมงานกับบริษัทที่มีวิสัยทัศน์และเปิดโอกาสให้พนักงานได้เรียนรู้และพัฒนาตัวเองอย่างเต็มที่
                    </div>
                </span>
            </div>
            
        </div>
    </div>
  );
}

const styles = {
  text: {
    margin: '100px 0 0 0',
    color: '#f5f5f5',
    fontSize: '4rem',
    animation: 'pulse 2s infinite',
    transition: 'color 0.5s ease',
    cursor: 'pointer',
    textShadow: '2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem',
    },
  },
  textHover: {
    color: '#9c02f5',
  },
  introduction: {
    margin: '0 10px',
    lineHeight: '1.6',
    textAlign: 'justify',
    color: 'white',
    fontSize: '1rem',
    '@media (max-width: 768px)': {
      fontSize: '0.9rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.8rem',
    },
  },
};

export default Home;
