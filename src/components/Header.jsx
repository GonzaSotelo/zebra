import './Header.css';

export const Header = () => {
  return (
    <header className='header__zebra'>
        <div className='container__logo'>Logo</div>
        <nav className='navbar__zebra'>

            <ul>
                <li><a href="">Sobre Nosotros</a></li>
                <li><a href="">Servicios</a></li>
                <li><a href="">Contactanos</a></li>
            </ul>
        </nav>
    </header>
  )
}
export default Header;