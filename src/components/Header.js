import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const { items } = useSelector((state) => state.cart);

  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  let itemsNum = 0;
  items.forEach((item) => {
    itemsNum += item.quantity;
  });

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
        <div onClick={() => setIsOpen(!isOpen)} className='cart-icon'>
          <i className='fas fa-shopping-cart'></i>
          {itemsNum !== 0 && <span>{itemsNum}</span>}
        </div>
        {isOpen && <Cart />}
      </div>
    </header>
  );
}
