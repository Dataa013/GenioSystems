import {useEffect} from 'react';

export default function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      

      {/* 👇️ scroll to top on button click */}
      <button className='scroll-button'
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '10px 20px',
          fontSize: '14px',
          bottom: '30px',
          right: '40px',
          backgroundColor: '#DF8400',
          color: '#fff',
          textAlign: 'center',
          border:'1px solid #DF8400',
          zIndex: '999',
          cursor: 'pointer',
          userSelect: 'none'
        }}

        
      >
        Scroll to top
      </button>
    </div>
  );
}
