import { useEffect, useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
    <KeyboardDoubleArrowUpIcon
        onClick={scrollToTop}
        style={{
            position: 'fixed',
            bottom: '50px',
            right: '30px',
            padding: '10px',
            fontSize: '24px', // ขนาดของไอคอนใหญ่ขึ้น
            backgroundColor: '#282059',
            color: '#fff',
            border: 'none',
            borderRadius: '50%', // เปลี่ยนให้เป็นวงกลม
            cursor: 'pointer',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
            width: '30px', // กำหนดขนาดความกว้างของปุ่ม
            height: '30px', // กำหนดขนาดความสูงของปุ่ม
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    />
)}
    </>
  );
}

export default BackToTop;
