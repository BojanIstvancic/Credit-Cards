import "../styles/button.css";
import { Link } from "react-router-dom";

const Button = ({ link }) => {
  return (
    <div className="addCard__container">
      <Link to={link}>
        <div className="addCard">+</div>
      </Link>
    </div>
  );
};

export default Button;
