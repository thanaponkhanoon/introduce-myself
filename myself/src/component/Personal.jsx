import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Personal () {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const par = { margin: isMobile ? '10px 0' : '20px 0 10px 60px', color: 'whitesmoke'};
    const boxStyle = { 
        width: isMobile ? '100%' : '800px', // Full width on mobile
        height: 'auto', 
        margin: '20px auto', // Center the boxes
        border: '1px dashed black',
    };
    return (
        <>
        <div style={{ margin: '80px 50px 0 50px', display: 'flex', justifyContent: 'center' }}>
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
            PERSONAL INFORMATION
          </h2>
        </div>
        <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', margin: '0 70px 0 30px', color: 'white'}}>  
        <Box component="section" sx={{ p: 2, border: '1px dashed black' }} style={boxStyle}>
            <div style={{margin: '0px 0 0 20px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'center'}}>
                    <img 
                        src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/315024483_1784409908589071_3355937588288492795_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFqK0icyCA3qxm2OOQl7Nt_1E2mUx7aAdXUTaZTHtoB1cRuG0Fow3kYqQKHSh1CEoYEb0HjHFSh_dVSdsY-8dfj&_nc_ohc=MO7qQr14oLkQ7kNvgFJkEXu&_nc_zt=23&_nc_ht=scontent.fbkk22-1.fna&oh=00_AYAnW_64VGg7KlXHo1FqcxhyXTjLFFa-khmBttWzKsCi9Q&oe=6700493E"
                        alt="IT ME"
                        style={{
                            width: isMobile ? '150px' : '200px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 'auto',
                            margin: '5px 40px 0 40px',
                            border: '5px solid #2c003e',
                            padding: '5px',
                            boxSizing: 'border-box',
                            borderRadius: '10px',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderColor: 'blue',
                            backgroundColor: '#0f0c29'
                            }}
                    />
                </div>
                <span>
                    <h3 style={{margin: '20px 0 10px 40px'}}>
                        ข้อมูลส่วนตัว
                    </h3>
                    <div style={par}>
                        <strong>ชื่อ - นามสกุล : </strong>นายธนพล  ไชยนิตย์<br/>
                        <strong>ชื่อเล่น : </strong>ขนุน<br/>
                        <strong>วันเกิด : </strong>13 พฤศจิกายน 2000<br/>
                        <strong>อายุ : </strong>23 ปี<br/>
                        <strong>สัดส่วน : </strong>สูง 167 เซนติเมตร หนัก 55 กิโลกรัม<br/>
                        <strong>Email : </strong>thanaponkhanoon1123@gmail.com<br/>
                        <strong>Line : </strong>0639680529<br/>
                        <strong>เบอร์โทรศัพท์ : </strong>0639680529<br/>
                    </div>
                    <h3 style={{margin: '20px 0 10px 40px'}}>
                        ภูมิลำเนา
                    </h3>
                    <div style={par}>
                        55 ม. 13 ต.สระกำแพงใหญ่ อ.อุทุมพรพิสัย จ.ศรีสะเกษ 33120
                    </div>
                    <h3 style={{margin: '20px 0 10px 40px'}}>
                        กิจกรรมระหว่างศึกษาในมหาวิทยาลัย
                    </h3>
                    <div style={par}>
                        <strong style={{margin: '0 15px 0 0'}}>2020-2022 </strong>คณะกรรมการหอพักนักศึกษา
                        <strong style={{margin: '0 15px 15px 30px'}}>ตำแหน่ง </strong>เหรัญญิก<br/>
                        <strong style={{fontSize: '15px', margin: '0 15px 0 0'}}>หน้าที่รับผิดชอบ </strong> ดูแลนักศึกษาใหม่ที่เข้ามาในหอพัก 
                        ซึ่งคณะกรรมการมีหน้าที่ ต้อนรับและให้คำแนะนำหรือคำปรึกษา แก่นักศึกษาและผู้ปกครอง รวมถึงประสานงานคณะกรรมการหอพักนักศึกษาหออื่นๆ
                        ในการทำกิจกรรมต่างๆ ร่วมกัน ตลอดทั้งปีการศึกษา และเข้าประชุมรับข่าวสาร จากหน่วยงาน ของมหาวิทยาลัย เพื่อนำมาประชาสัมพันธ์ 
                        และร่วมทำกิจกรรมกับบุคคลากรหรือกลุ่มนักศึกษาที่เกี่ยวข้อง
                    </div>
                    <h3 style={{margin: '20px 0 10px 40px'}}>
                        ทักษะด้านไอที
                    </h3>
                    <div style={par}>
                        <strong style={{fontSize: "17px", margin: '0 15px 0 0'}}>Programming</strong>อยู่ในระดับพื้นฐาน<br/>
                        <div style={{fontSize: "14px", marginLeft: '15px'}}>
                        -Python<br/>
                        -JavaScript<br/>
                        -TypeScript<br/>
                        -HTML<br/>
                        -CSS<br/>       
                        -Tailwind CSS<br/>
                        -GO
                        </div>
                        <strong style={{fontSize: "17px", margin: '0 15px 0 0'}}>Database</strong>อยู่ในระดับพื้นฐาน<br/>
                        <div style={{fontSize: "14px", marginLeft: '15px'}}>
                        -MySql<br/>
                        -Sqlite<br/>
                        -Postgresql
                        </div>
                        <strong style={{fontSize: "17px", margin: '0 15px 0 0'}}>Framework & Library</strong>อยู่ในระดับพื้นฐาน<br/>
                        <div style={{fontSize: "14px", marginLeft: '15px'}}>
                        -React<br/>
                        -Mui<br/>
                        -Svelte<br/>
                        -Flowbite Svelte
                        </div>
                        <strong style={{fontSize: "17px", margin: '0 15px 0 0'}}>Application</strong>อยู่ในระดับพื้นฐานถึงปานกลาง<br/>
                        <div style={{fontSize: "14px", marginLeft: '15px'}}>
                        -Mocrosoft Office (Excel Word PowerPiont)<br/>
                        -VS Code<br/>
                        -Adobe Photoshop<br/>
                        -OBS Studio<br/>
                        -Capcut
                        </div>
                    </div>
                    <h3 style={{margin: '20px 0 10px 40px'}}>
                        จุดเด่น และจุดที่ต้องพัฒนา
                    </h3>
                    <div style={par}>
                        <strong style={{fontSize: "17px", margin: '0 15px 0 0'}}>จุดเด่น</strong><br/>
                        <div style={{fontSize: "14px", marginLeft: '15px'}}>
                        -ทำงานเป็นทีมหรือทำงานร่วมกับผู้อื่นได้ดี<br/>
                        -กระตื้อรือร้น พร้อมรับคำติชมและคำแนะนำ<br/>
                        -ชอบเรียนรู้สิ่งใหม่<br/>
                        -ตรงต่อเวลา
                        </div>
                        <strong style={{fontSize: "17px", margin: '0 15px 0 0'}}>จุดที่ต้องพัฒนา</strong><br/>
                        <div style={{fontSize: "14px", marginLeft: '15px'}}>
                        -เป็นมือใหม่ในด้านพัฒนาเว็บไซต์ ทั้ง Font-End Back-End และ Full Stack<br/>
                        -ขาดความมั่นใจในตัวเอง<br/>
                        -เหม่อลอยบางครั้ง
                        </div>
                     </div>
                     <h3 style={{margin: '20px 0 10px 40px'}}>
                        งานอดิเรก
                     </h3>
                     <div style={par}>
                        <div style={{fontSize: "14px", marginLeft: '15px'}}>
                        -ฟังเพลง นอนหลับพักผ่อน หรือไปดูหนังที่โรงภาพยนต์<br/>
                        -เพิ่มความรู้และพัฒนาตัวเอง ในช่องทางที่ฟรี เช่น ศึกษา HTML จาก YouTube<br/>
                        -อ่าน Manhwa เล่นเกมส์ออนไลน์
                        </div>
                     </div>
                     <h3 style={{margin: '20px 0 10px 40px'}}>
                        อุปนิสัยใจคอ
                     </h3>
                     <div style={par}>
                        <div style={{fontSize: "14px", marginLeft: '15px'}}>
                        -เห็นอกเห็นใจผู้อื่น<br/>
                        -พูดน้อย แต่ต่อยหนัก<br/>
                        -จริงใจกับคนที่จริงใจกับเรา
                        </div>
                     </div>
                  </span>
              </div>
            </Box>
        </div>
        </>
    )
}

export default Personal