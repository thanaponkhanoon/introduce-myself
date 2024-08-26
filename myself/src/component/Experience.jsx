import Box from '@mui/material/Box';
import ReactPlayer from 'react-player';

function Experience () {
    const par = { margin: '20px 0 10px 60px' };
    return (
        <>
        <div style={{margin: '50px 0 0 15px', display: 'flex', justifyContent: 'center'}}>
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
                transition: 'transform 0.3s ease-in-out'
              }}
            >
                EXPERIENCE
            </h2>
        </div>
        <div style={{display: 'flex', margin: '0 0 0 30px'}}>  
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            <div style={{margin: '0px 0 0 20px'}}>
                <span>
                    <h2>
                    2024 : IT Application Support Officer <small style={{ fontSize: '18px' }}>(18 March - 31 July)</small>
                    </h2>
                </span>
                <strong style={{ fontSize: '18px', margin: '0 0 0 20px'}}>KIG : KKF international groups co. ltd</strong>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img 
                        src="https://kigintergroup.com/public/themes/kig/assets/images/home/logo.png"
                        alt="KIG Logo"
                        style={{
                            width: '250px',
                            height: 'auto',
                            margin: '5px 10px 0 40px',
                            }}
                    />
                </div>
                <span>
                    <h3 style={{margin: '20px 0 10px 40px'}}>
                        หน้าที่รับผิดชอบ
                    </h3>
                    <div style={par}>
                        1.ตรวจสอบโปรแกรมที่โปรแกรมเมอร์นำมาติดตั้งให้ได้ตามมาตรฐาน และสามารถสรุปผลการตรวจสอบให้โปรแกรมเมอร์ 
                        เข้าใจถึงปัญหา และนำไปตรวจสอบแก้ไขได้ถูกต้อง ก่อนติดตั้งให้ลูกค้าได้ใช้งานจริง
                    </div>
                    <div style={par}>
                        2. พัฒนาระบบโปรแกรมคอมพิวเตอร์ โดยศึกษาทำความเข้าใจ Program Specification และข้อมูลอื่นๆ ที่เกี่ยวข้อง 
                        และดำเนินการเขียนโปรแกรมให้ได้ตามคุณสมบัติที่กำหนดไว้
                    </div>
                    <div style={par}>
                        3. ติดตั้งระบบโปรแกรมและอบรมวิธีการใช้งานโปรแกรมให้ลูกค้าหน่วยงานต่างๆ เข้าใจและสามารถใช้งานโปรแกรมได้
                    </div>
                    <div style={par}>
                        4. จัดทำเอกสารที่เกี่ยวข้องกับการตรวจสอบระบบโปรแกรม ตลอดจนเอกสารที่ใช้ในการส่งมอบติดตั้งระบบ ได้ถูกต้องครบถ้วน
                    </div>
                    <div style={par}>
                        5. ดูแลระบบโปรแกรมคอมพิวเตอร์ เพื่อสามารถใช้งานได้อย่างมีประสิทธิภาพและเป็นไปตามมาตรฐานระบบโปรแกรมของบริษัท
                    </div>
                </span>
            </div>
            </Box>
        </div>
        <div style={{display: 'flex', margin: '50px 0 0 30px'}}>  
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            <div style={{margin: '0px 0 0 20px'}}>
                <span>
                    <h2>
                    2023 : Software Engineer <small style={{ fontSize: '18px' }}>(Cooperative Education 17 July - 3 November)</small>
                    </h2>
                </span>
                <strong style={{ fontSize: '18px', margin: '0 0 0 20px'}}>BANGKOK SMARTCARD SYSTEM COMPANY LIMITED</strong>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img 
                        src="https://www.rabbit.co.th/images/rabbit-logo.svg"
                        alt="BSS Logo"
                        style={{
                            width: '250px',
                            height: 'auto',
                            margin: '5px 10px 0 40px',
                            }}
                    />
                </div>
                <span>
                    <h3 style={{margin: '20px 0 10px 40px'}}>
                        หน้าที่รับผิดชอบ
                    </h3>
                    <div style={par}>
                        1.สร้างโปรเจ็คตาม Requirement
                    </div>
                    <div style={par}>
                    Full Stack WebDev Pros Cons<br />
                    - Next.js (React)<br />
                    - SvelteKit (Svelte)<br /><br />

                    Requirement<br />
                    - One UI Component (Can use 3rd-party dependencies but same UI Component)<br />
                    - Firebase AppCheck<br />
                    - Firebase Authentication (Google Sign-in + Email, Password)<br />
                    - Server Side Rendering by Allowed Permission<br />
                    - API authorized with Firebase Access Token or Session and AppCheck Token<br />
                    - API connect to Database<br />
                    - Deploy Docker<br /><br />

                    UI Components<br />
                    - Date Picker (Must)<br />
                    - Time Picker (Optional)<br />
                    - Modal<br />
                    - Form<br />
                    - Grid<br />
                    - Side Navigation Menu<br />
                    - Desktop Friendly (Must)<br />
                    - Mobile Friendly<br />
                    - Tailwind CSS maybe good<br />
                    - Free & Open-source & See License<br />
                    </div>
                    <ReactPlayer url='https://youtu.be/mLR659WgU4w' width='1367px' />
                </span>
            </div>
            </Box>
        </div>
        </>
    )  
}
export default Experience
