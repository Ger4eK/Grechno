import about from '../../assets/images/about.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className='about__container'>
        <div className='about__wrapper'>
          <img className='about__img' src={about} alt='about img'></img>
          <div className='about__content'>
            <h1 className='about__content-title'>ПРО НАС</h1>
            <p className='about__content-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <p className='about__content-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ad
              minim veniam, quis nostrud exercitation Lorem
            </p>
            <p className='about__content-text'>
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
