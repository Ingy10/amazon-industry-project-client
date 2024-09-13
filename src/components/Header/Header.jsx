import "./Header.scss";
import logo from "../../assets/images/brand__logo.png";
import canadaFlag from "../../assets/images/Canada-flag-icon-on-transparent-background-PNG.png";
import cartIcon from "../../assets/icons/image.png";

function Header() {
  return (
    <>
      <section className="header">
        <div className="header__top-header">
          <div className="header__logo-container header__container">
            <img className="header__logo-image" src={logo} />
          </div>
        </div>
        <input
          className="header__input"
          type="text"
          placeholder="Search Amazon.ca"
        />
        <div className="header__wrapper">
          <div className="header__language-container header__container">
            <img className="header__language-flag" src={canadaFlag} />
            <p className="header__language-text">EN</p>
          </div>
          <div className="header__accounts-container header__container">
            <p className="header__greeting">Hello</p>
            <p className="header__list-dropdown">Accounts & Lists</p>
          </div>
          <div className="header__returns-container header__container">
            <p className="header__returns">Returns</p>
            <p className="header__orders">& Orders</p>
          </div>
          <div className="header__cart-container header__container">
            <img className="header__cart-icon" src={cartIcon} />
            <p className="header__cart-text">Cart</p>
          </div>
          <div className="header__subheader"></div>
        </div>
      </section>
    </>
  );
}
export default Header;
