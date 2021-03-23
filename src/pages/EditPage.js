import { useHistory } from "react-router-dom";

import Card from "../components/Card";
import Form from "../components/Form";

import { useState } from "react";

const EditPage = ({ cards }) => {
  const history = useHistory();
  const url = history.location.pathname;
  let id = Number(url.slice(7, -5));
  const card = cards[id];

  const [name, setName] = useState(card.name);
  const [cardNumber1, setCardNumber1] = useState(card.cardNumber.slice(0, 4));
  const [cardNumber2, setCardNumber2] = useState(card.cardNumber.slice(5, 9));
  const [cardNumber3, setCardNumber3] = useState(card.cardNumber.slice(10, 14));
  const [cardNumber4, setCardNumber4] = useState(card.cardNumber.slice(15, 19));
  const [expiry, setExpiry] = useState(card.expiry);

  const addCardToLS = () => {
    const currentCards = cards.map((card, index) => {
      if (index === id) {
        card.name = name;
        card.cardNumber = `${cardNumber1} ${cardNumber2} ${cardNumber3} ${cardNumber4}`;
        card.expiry = expiry;
      }
      return card;
    });
    localStorage.setItem("cards", JSON.stringify(currentCards));
    history.push("/cards");
  };

  return (
    <div className="addPage">
      <h1>Edit Current Card</h1>
      <Card
        name={name}
        expiry={expiry}
        cardNumber={`${cardNumber1} ${cardNumber2} ${cardNumber3} ${cardNumber4}`}
      />
      <Form
        name={name}
        setName={setName}
        cardNumber1={cardNumber1}
        setCardNumber1={setCardNumber1}
        cardNumber2={cardNumber2}
        setCardNumber2={setCardNumber2}
        cardNumber3={cardNumber3}
        setCardNumber3={setCardNumber3}
        cardNumber4={cardNumber4}
        setCardNumber4={setCardNumber4}
        expiry={expiry}
        setExpiry={setExpiry}
        addCardToLS={addCardToLS}
      />
    </div>
  );
};

export default EditPage;
