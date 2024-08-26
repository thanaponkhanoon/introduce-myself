import Box from '@mui/material/Box';

function Experience () {
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
                            2024 : IT Application Support Officer
                    </h2>
                </span>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img 
                        src="https://kigintergroup.com/public/themes/kig/assets/images/home/logo.png"
                        alt="SUT Logo"
                        style={{
                            width: '250px',
                            height: 'auto',
                            margin: '0 10px 0 40px',
                            }}
                    />
                </div>
                <span>
                    <h3 style={{margin: '20px 0 10px 20px'}}>
                        หน้าที่รับผิดชอบ
                    </h3>
                    <div style={{margin: '0 0 0 45px'}}>
                        1.ตรวจสอบโปรแกรมที่โปรแกรมเมอร์นำมาติดตั้งให้ได้ตามมาตรฐาน และสามารถสรุปผลการตรวจสอบให้โปรแกรมเมอร์ 
                        เข้าใจถึงปัญหา และนำไปตรวจสอบแก้ไขได้ถูกต้อง ก่อนติดตั้งให้ลูกค้าได้ใช้งานจริง
                    </div>
                    <div style={{margin: '0 0 0 45px'}}>
                        2. พัฒนาระบบโปรแกรมคอมพิวเตอร์ โดยศึกษาทำความเข้าใจ Program Specification และข้อมูลอื่นๆ ที่เกี่ยวข้อง 
                        และดำเนินการเขียนโปรแกรมให้ได้ตามคุณสมบัติที่กำหนดไว้
                    </div>
                    <div style={{margin: '0 0 0 45px'}}>
                        3. ติดตั้งระบบโปรแกรมและอบรมวิธีการใช้งานโปรแกรมให้ลูกค้าหน่วยงานต่างๆ เข้าใจและสามารถใช้งานโปรแกรมได้
                    </div>
                    <div style={{margin: '0 0 0 45px'}}>
                        4. จัดทำเอกสารที่เกี่ยวข้องกับการตรวจสอบระบบโปรแกรม ตลอดจนเอกสารที่ใช้ในการส่งมอบติดตั้งระบบ ได้ถูกต้องครบถ้วน
                    </div>
                    <div style={{margin: '0 0 0 45px'}}>
                        5. ดูแลระบบโปรแกรมคอมพิวเตอร์ เพื่อสามารถใช้งานได้อย่างมีประสิทธิภาพและเป็นไปตามมาตรฐานระบบโปรแกรมของบริษัท
                    </div>
                </span>
            </div>
            </Box>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>      
        </div>
        </>
    )  
}
export default Experience
