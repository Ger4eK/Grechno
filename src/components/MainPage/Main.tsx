import Grechno from "../../assets/images/Grechno.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import main from "../../assets/images/main.png";

const Main = () => {
  return (
    <div className="main">
      <div className="main__fluid">
        <div className="main__container">
          <div className="main__wrapper">
            <div className="main__content">
              <img className="main__content-img" src={Grechno} alt="grechno" />
              <p className="main__content-text">
                Сумки, створені бути поруч у всіх випадках життя
              </p>
              <button className="main__content-button button">
                ДИВИТИСЯ КАТАЛОГ
              </button>
              <div className="main__content-social">
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="#">
                  <img src={instagram} alt="facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img className="main__decor" src={main} alt="main" />
      </div>
    </div>
  );
};

export default Main;
