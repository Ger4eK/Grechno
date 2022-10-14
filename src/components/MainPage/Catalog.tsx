import arrow from "../../assets/images/arrow.svg";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="catalog__container">
        <div className="catalog__wrapper">
          <div className="catalog__categories">
            <h1 className="categories-title">КАТАЛОГ</h1>
            <ul className="categories-nav">
              <li>
                <a className="categories-link active" href="#">
                  Все
                </a>
              </li>
              <li>
                <a className="categories-link" href="#">
                  Шопери
                </a>
              </li>
              <li>
                <a className="categories-link" href="#">
                  Авоськи
                </a>
              </li>
              <li>
                <a className="categories-link" href="#">
                  Набори
                </a>
              </li>
              <li>
                <a className="categories-link" href="#">
                  Розпродаж
                </a>
              </li>
            </ul>
          </div>
          <ul className="products-list">
            <li className="products-item">
              <a className="products-item-img" href="#">
                <img
                  src={require("../../assets/images/products/prod-4.jpg")}
                  alt="product"
                />
              </a>
              <div className="products-item-info">
                <div className="products-item-wrapper">
                  <div className="products-item-left">
                    <h1 className="products-item-title">Набір “ОСІНЬ”</h1>
                    <div>
                      <p className="products-item-prod">Авоська</p>
                      <p className="products-item-prod">Шопер</p>
                    </div>
                  </div>
                  <div className="products-item-right">
                    <a className="products-item-arrow" href="#">
                      <img src={arrow} alt="arrow" />
                    </a>
                  </div>
                </div>
                <span className="products-item-price">380 грн</span>
              </div>
            </li>
            <li className="products-item">
              <a className="products-item-img" href="#">
                <img
                  src={require("../../assets/images/products/prod-1.jpg")}
                  alt="product"
                />
              </a>
              <div className="products-item-info">
                <div className="products-item-wrapper">
                  <div className="products-item-left">
                    <h1 className="products-item-title">Набір “ВЕСНА”</h1>
                    <div>
                      <p className="products-item-prod">Авоська</p>
                      <p className="products-item-prod">Еко чашка</p>
                      <p className="products-item-prod">Еко чашка</p>
                      <p className="products-item-prod">Еко чашка</p>
                      <p className="products-item-prod">Мішечок</p>
                    </div>
                  </div>
                  <div className="products-item-right">
                    <a className="products-item-arrow" href="#">
                      <img src={arrow} alt="arrow" />
                    </a>
                  </div>
                </div>
                <span className="products-item-price">350 грн</span>
              </div>
            </li>
            <li className="products-item">
              <a className="products-item-img" href="#">
                <img
                  src={require("../../assets/images/products/prod-2.jpg")}
                  alt="product"
                />
              </a>
              <div className="products-item-info">
                <div className="products-item-wrapper">
                  <div className="products-item-left">
                    <h1 className="products-item-title">Набір “ОСНОВА”</h1>
                    <div>
                      <p className="products-item-prod">Авоська</p>
                      <p className="products-item-prod">Шопер</p>
                    </div>
                  </div>
                  <div className="products-item-right">
                    <a className="products-item-arrow" href="#">
                      <img src={arrow} alt="arrow" />
                    </a>
                  </div>
                </div>
                <span className="products-item-price">450 грн</span>
              </div>
            </li>
            <li className="products-item">
              <a className="products-item-img" href="#">
                <img
                  src={require("../../assets/images/products/prod-3.jpg")}
                  alt="product"
                />
              </a>
              <div className="products-item-info">
                <div className="products-item-wrapper">
                  <div className="products-item-left">
                    <h1 className="products-item-title">Шопер з розписом</h1>
                    <div>
                      <p className="products-item-prod">Розмір 200х300х10 мм</p>
                    </div>
                  </div>
                  <div className="products-item-right">
                    <a className="products-item-arrow" href="#">
                      <img src={arrow} alt="arrow" />
                    </a>
                  </div>
                </div>
                <span className="products-item-price">380 грн</span>
              </div>
            </li>
            <li className="products-item">
              <a className="products-item-img" href="#">
                <img
                  src={require("../../assets/images/products/prod-5.jpg")}
                  alt="product"
                />
              </a>
              <div className="products-item-info">
                <div className="products-item-wrapper">
                  <div className="products-item-left">
                    <h1 className="products-item-title">Авоська</h1>
                  </div>
                  <div className="products-item-right">
                    <a className="products-item-arrow" href="#">
                      <img src={arrow} alt="arrow" />
                    </a>
                  </div>
                </div>
                <span className="products-item-price">120 грн</span>
              </div>
            </li>
            <li className="products-item">
              <a className="products-item-img" href="#">
                <img
                  src={require("../../assets/images/products/prod-1.jpg")}
                  alt="product"
                />
              </a>
              <div className="products-item-info">
                <div className="products-item-wrapper">
                  <div className="products-item-left">
                    <h1 className="products-item-title">Набір “АКТУАЛЬНИЙ”</h1>
                    <p className="products-item-prod">Авоська</p>
                    <p className="products-item-prod">Шопер</p>
                    <p className="products-item-prod">Захисна маска</p>
                  </div>
                  <div className="products-item-right">
                    <a className="products-item-arrow" href="#">
                      <img src={arrow} alt="arrow" />
                    </a>
                  </div>
                </div>
                <span className="products-item-price">520 грн</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
