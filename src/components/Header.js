export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>LOGO</div>
      <nav className='header-nav'>
        <ul className='nav-links'>
          <li>Women</li>
          <li>Men</li>
        </ul>
      </nav>
      <div className='cart'>
        <i className='fas fa-shopping-cart'></i>
      </div>
    </header>
  );
}
