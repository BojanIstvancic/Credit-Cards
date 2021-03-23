import chip from "../assets/Chip.png";
import Visa from "../assets/Visa.png";
import Discover from "../assets/Discover.png";
import MasterCard from "../assets/MasterCard.png";
import "../styles/card.css";
import { Link } from "react-router-dom";

const Card = ({
  id,
  cardNumber = "1456 1298 6574 1287",
  name = "USER NAME",
  expiry = "02/22",
  link,
}) => {
  const handleColorType = () => {
    const firstCardNumber = cardNumber.slice(0, 1);
    switch (firstCardNumber) {
      case "5":
        return "card--masterCard";
      case "6":
        return "card--discover";
      default:
        return "card--visa";
    }
  };
  return (
    <div className="card__container">
      {link ? (
        <Link to={`/cards/${id}/edit`}>
          <div className={`card ${handleColorType()}`}>
            <div className="card__logo">
              <img className="logo logo--visa" src={Visa} alt="logo" />
              <img
                className="logo logo--masterCard"
                src={MasterCard}
                alt="logo"
              />
              <img className="logo logo--discover" src={Discover} alt="logo" />
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
        <div className={`card ${handleColorType()}`}>
          <div className="card__logo">
            <img className="logo logo--visa" src={Visa} alt="logo" />
            <img
              className="logo logo--masterCard"
              src={MasterCard}
              alt="logo"
            />
            <img className="logo logo--discover" src={Discover} alt="logo" />
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
