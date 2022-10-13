import handmade from '../../assets/images/benefits/handmade.svg';
import quality from '../../assets/images/benefits/quality.svg';
import price from '../../assets/images/benefits/price.svg';
import speed from '../../assets/images/benefits/speed.svg';

const Benefits = () => {
  return (
    <div className='benefits'>
      <div className='benefits__container'>
        <ul className='benefits__list'>
          <li className='list__item'>
            <img src={handmade} alt='handmade' />
            <h2 className='list__item-title'>HANDMADE</h2>
            <p className='list__item-text'>Індивідуальність, ручна робота</p>
          </li>
          <li className='list__item'>
            <img src={quality} alt='quality' />
            <h2 className='list__item-title'>ЯКІСТЬ</h2>
            <p className='list__item-text'>Власне виробництво</p>
          </li>
          <li className='list__item'>
            <img src={price} alt='price' />
            <h2 className='list__item-title'>ЦІНА</h2>
            <p className='list__item-text'>Конкурентна вартість</p>
          </li>
          <li className='list__item'>
            <img src={speed} alt='speed' />
            <h2 className='list__item-title'>ШВИДКІСТЬ</h2>
            <p className='list__item-text'>
              Оперативність виготовлення та відправка
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
