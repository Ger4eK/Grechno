import { useEffect, useState } from 'react';
import Logo from '../assets/images/logo.svg';
import Card from '../assets/images/card.svg';

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [headerHide, setHeaderHide] = useState(false);

  useEffect(() => {
    const HeaderActiveHandler = () => {
      if (window.scrollY > 150) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };
    window.addEventListener('scroll', HeaderActiveHandler);

    let lastScrolledPos = 0;
    const headersticky = function () {
      if (lastScrolledPos >= window.scrollY) {
        setHeaderHide(false);
      } else {
        setHeaderActive(true);
        setHeaderHide(true);
      }
      lastScrolledPos = window.scrollY;
    };
    window.addEventListener('scroll', headersticky);

    return () => {
      window.removeEventListener('scroll', HeaderActiveHandler);
      window.removeEventListener('scroll', headersticky);
    };
  }, []);

  return (
    <div
      className={`header ${headerActive ? 'active' : ''} ${
        headerHide ? 'header-hide' : ''
      }`}
    >
      <div className='header__container'>
        <div className='header__wrapper'>
          <a className='header__logo' href='#'>
            <img src={Logo} alt='logo' />
          </a>
          <ul className='header__nav'>
            <li>
              <a className='header__nav-link link-active' href='#'>
                Шопери
              </a>
            </li>
            <li>
              <a className='header__nav-link ' href='#'>
                Авоськи
              </a>
            </li>
            <li>
              <a className='header__nav-link ' href='#'>
                Набори
              </a>
            </li>
            <li>
              <a className='header__nav-link ' href='#'>
                Розпродаж
              </a>
            </li>
            <li>
              <a className='header__nav-link ' href='#'>
                Відгуки
              </a>
            </li>
            <li className='header__contacts'>
              <a className='header__nav-link ' href='#'>
                Контакти
              </a>
              <span className='header__tel'>+38 (032) 00 000 00</span>
            </li>
          </ul>
          {/*<span className='header__tel'>+38 (032) 00 000 00</span>*/}
          <button className='header__card'>
            <img src={Card} alt='card icon' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
