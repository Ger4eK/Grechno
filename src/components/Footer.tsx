import Logo from '../assets/images/logo.svg';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__wrapper'>
          <div className='footer__logo'>
            <img className='footer__logo-img' src={Logo} alt='logo' />
            <div className='footer__logo-text'>
              Сумки, створені бути поруч у всіх випадках життя
            </div>
          </div>
          <div className='footer__links'>
            <ul className='footer__links-nav'>
              <li>
                <a className='link-nav active' href='#'>
                  Шопери
                </a>
              </li>
              <li>
                <a className='link-nav' href='#'>
                  Авоськи
                </a>
              </li>
              <li>
                <a className='link-nav' href='#'>
                  Набори
                </a>
              </li>
              <li>
                <a className='link-nav' href='#'>
                  Розпродаж
                </a>
              </li>
              <li>
                <a className='link-nav' href='#'>
                  Відгуки
                </a>
              </li>
              <li>
                <a className='link-nav active' href='#'>
                  Контаки
                </a>
              </li>
            </ul>
            <div className='footer__links-social'>
              <a href='#'>
                <img src={facebook} alt='facebook' />
              </a>
              <a href='#'>
                <img src={instagram} alt='facebook' />
              </a>
            </div>
          </div>
          <div className='footer__telephone'>
            <span className='footer__number'>+38 (032) 00 000 00</span>
            <button className='button header-btn'>ЗАМОВИТИ ДЗВІНОК</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
