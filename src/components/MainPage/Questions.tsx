import React from 'react';

const Questions = () => {
  return (
    <div className='questions'>
      <div className='questions__container'>
        <div className='questions__wrapper'>
          <img
            src={require('../../assets/images/questions.jpg')}
            alt='questions img'
            className='questions__img'
          />
          <form className='questions__form'>
            <h1>Є запитання?</h1>
            <p>
              Заповніть та надішліть форму. Ми зв’яжемося з Вами найближчим
              часом.
            </p>
            <label htmlFor='name'>
              Ім’я
              <input type='text' id='name' placeholder="Ім'я" />
            </label>
            <label htmlFor='tel'>
              Телефон
              <input type='tel' id='tel' defaultValue='+38' />
            </label>
            <label htmlFor='message'>
              Ваш текст
              <textarea id='message' defaultValue='Доброго дня!' />
            </label>
            <button className='button'>НАДІСЛАТИ</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Questions;
