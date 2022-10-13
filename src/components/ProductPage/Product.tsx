import left from '../../assets/images/form-arrow-left.svg';
import right from '../../assets/images/form-arrow-right.svg';

const Product = () => {
  return (
    <div className='product'>
      <div className='product__container'>
        <div className='product__wrapper'>
          <div className='product__info'>
            <h1 className='product__info-title'>НАБІР ШОПЕРІВ “Мама-доця”</h1>
            <p className='product__info-text'>Артикул 1243</p>
            <p className='product__info-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <form className='product__info-form'>
              <h2>Матеріал:</h2>
              <div className='form-materials'>
                <label className='container'>
                  Льон
                  <input type='checkbox' />
                  <span className='checkmark'></span>
                </label>
                <label className='container'>
                  Двонитка
                  <input type='checkbox' />
                  <span className='checkmark'></span>
                </label>
              </div>
              <div className='form-amount'>
                <div className='count'>
                  <h2>Кількість:</h2>
                  <div className='count-btn'>
                    <button>
                      <img src={left} alt='left' />
                    </button>
                    <input type='number' defaultValue={1} />
                    <button>
                      <img src={right} alt='right' />
                    </button>
                  </div>
                </div>
                <div className='price'>
                  <h2>Ціна:</h2>
                  <span>280 грн</span>
                </div>
              </div>
              <button className='button'>ЗАМОВИТИ</button>
            </form>
          </div>
          <div className='product__images'>
            <img
              className='big'
              src={require('../../assets/images/product/big-prod.jpg')}
              alt=''
            />
            <div>
              <img
                className='small'
                src={require('../../assets/images/product/small-prod.jpg')}
                alt=''
              />
              <img
                className='medium'
                src={require('../../assets/images/product/medium-prod.jpg')}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
