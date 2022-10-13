import arrow from '../../assets/images/arrow.svg';
import arrowLeft from '../../assets/images/arrowLeft.svg';

const News = () => {
  return (
    <div className='news'>
      <div className='news__container'>
        <div className='news__wrapper'>
          <div className='news__updates'>
            <div className='updates-info'>
              <span className='updates-text'>ОНОВЛЕННЯ</span>
              <button className='news-btn'>
                <img src={arrow} alt='update button' />
              </button>
            </div>

            <a className='news-img' href='#'>
              <img src={require('../../assets/images/updates.jpg')} alt='updates' />
            </a>
          </div>

          <div className='news__sales'>
            <a className='news-img' href='#'>
              <img src={require('../../assets/images/sales.jpg')} alt='updates' />
            </a>
            <div className='sales-info'>
              <span className='sales-text'>РОЗПРОДАЖ</span>
              <button className='news-btn'>
                <img src={arrowLeft} alt='sales button' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
