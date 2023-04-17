import { useRef, useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () =>
      document.removeEventListener('click', handleOutsideClick, true);
  }, [ref]);

  return (
    <header className='header'>
      <div className='logo'>LOGO</div>
      <nav className='header-nav'>
        <ul className='nav-links'>
          <li>Women</li>
          <li>Men</li>
        </ul>
      </nav>
      <div ref={ref} className='cart'>
        <i
          onClick={() => setIsOpen(!isOpen)}
          className='fas fa-shopping-cart'
        ></i>
        {isOpen && <div className='cart-content'></div>}
      </div>
    </header>
  );
}
