import chip from "../assets/Chip.png";
import logo from "../assets/Visa.png";
import "../styles/card.css";
import { Link } from "react-router-dom";

const Card = ({
  cardNumber = "1456 1298 6574 1287",
  name = "USER NAME",
  expiry = "02/22",
  link,
}) => {
  return (
    <div className="card__container">
      {link ? (
        <Link to="/cards/id/edit">
          <div className="card">
            <div className="card__logo">
              <img className="logo" src={logo} alt="logo" />
            </div>
            <img className="card__chip" src={chip} alt="chip" />
            <div className="card__number">{cardNumber}</div>
            <div className="card__info">
              <div className="card__infoName">{name}</div>
              <div className="card__infoExpiry">{expiry}</div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="card">
          <div className="card__logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <img className="card__chip" src={chip} alt="chip" />
          <div className="card__number">{cardNumber}</div>
          <div className="card__info">
            <div className="card__infoName">{name}</div>
            <div className="card__infoExpiry">{expiry}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
