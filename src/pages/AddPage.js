import Card from "../components/Card";
import Form from "../components/Form";

import { useState } from "react";

const AddPage = () => {
  const [name, setName] = useState("USER NAME");
  const [cardNumber1, setCardNumber1] = useState(1456);
  const [cardNumber2, setCardNumber2] = useState(1298);
  const [cardNumber3, setCardNumber3] = useState(6574);
  const [cardNumber4, setCardNumber4] = useState(1287);
  const [expiry, setExpiry] = useState("02/22");

  return (
    <div className="addPage">
      <h1>Add Card To Account</h1>
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
      />
    </div>
  );
};

export default AddPage;
