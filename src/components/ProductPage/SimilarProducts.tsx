import arrow from '../../assets/images/arrow.svg';

const SimilarProducts = () => {
  return (
    <div className='similar'>
      <div className='similar__container'>
        <div className='similar__wrapper'>
          <h1>ПОХОЖІ ТОВАРИ</h1>
          <ul className='products-list'>
            <li className='products-item'>
              <a className='products-item-img' href='#'>
                <img
                  src={require('../../assets/images/products/prod-4.jpg')}
                  alt='product'
                />
              </a>
              <div className='products-item-info'>
                <div className='products-item-left'>
                  <h1 className='products-item-title'>Набір “ОСІНЬ”</h1>
                  <p className='products-item-prod'>Авоська</p>
                  <p className='products-item-prod'>Шопер</p>
                </div>
                <div className='products-item-right'>
                  <a className='products-item-arrow' href='#'>
                    <img src={arrow} alt='arrow' />
                  </a>
                  <span className='products-item-price'>380 грн</span>
                </div>
              </div>
            </li>
            <li className='products-item'>
              <a className='products-item-img' href='#'>
                <img
                  src={require('../../assets/images/products/prod-1.jpg')}
                  alt='product'
                />
              </a>
              <div className='products-item-info'>
                <div className='products-item-left'>
                  <h1 className='products-item-title'>Набір “ВЕСНА”</h1>
                  <p className='products-item-prod'>Авоська</p>
                  <p className='products-item-prod'>Еко чашка</p>
                  <p className='products-item-prod'>Мішечок</p>
                </div>
                <div className='products-item-right'>
                  <a className='products-item-arrow' href='#'>
                    <img src={arrow} alt='arrow' />
                  </a>
                  <span className='products-item-price'>350 грн</span>
                </div>
              </div>
            </li>
            <li className='products-item'>
              <a className='products-item-img' href='#'>
                <img
                  src={require('../../assets/images/products/prod-2.jpg')}
                  alt='product'
                />
              </a>
              <div className='products-item-info'>
                <div className='products-item-left'>
                  <h1 className='products-item-title'>Набір “ОСНОВА”</h1>
                  <p className='products-item-prod'>Авоська</p>
                  <p className='products-item-prod'>Шопер</p>
                </div>
                <div className='products-item-right'>
                  <a className='products-item-arrow' href='#'>
                    <img src={arrow} alt='arrow' />
                  </a>
                  <span className='products-item-price'>450 грн</span>
                </div>
              </div>
            </li>
            <li className='products-item'>
              <a className='products-item-img' href='#'>
                <img
                  src={require('../../assets/images/products/prod-3.jpg')}
                  alt='product'
                />
              </a>
              <div className='products-item-info'>
                <div className='products-item-left'>
                  <h1 className='products-item-title'>Шопер з розписом</h1>
                  <p className='products-item-prod'>Розмір 200х300х10 мм</p>
                </div>
                <div className='products-item-right'>
                  <a className='products-item-arrow' href='#'>
                    <img src={arrow} alt='arrow' />
                  </a>
                  <span className='products-item-price'>380 грн</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
