import "../styles/form.css";

const Form = ({
  cardNumber1,
  cardNumber2,
  cardNumber3,
  cardNumber4,
  name,
  expiry,
  setName,
  setCardNumber1,
  setCardNumber2,
  setCardNumber3,
  setCardNumber4,
  setExpiry,
  addCardToLS,
}) => {
  return (
    <form className="form">
      <p>Name</p>
      <input
        className="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>Card Number</p>
      <div className="form__section">
        <input
          name="number"
          maxLength="4"
          value={cardNumber1}
          onChange={(event) => setCardNumber1(event.target.value)}
        />
        <input
          name="number"
          maxLength="4"
          value={cardNumber2}
          onChange={(event) => setCardNumber2(event.target.value)}
        />
        <input
          name="number"
          maxLength="4"
          value={cardNumber3}
          onChange={(event) => setCardNumber3(event.target.value)}
        />
        <input
          name="number"
          maxLength="4"
          value={cardNumber4}
          onChange={(event) => setCardNumber4(event.target.value)}
        />
      </div>
      <p>Expires on</p>
      <input
        name="expiry"
        value={expiry}
        onChange={(event) => setExpiry(event.target.value)}
      />
      <input
        className="form__submit"
        type="submit"
        onClick={() => addCardToLS()}
      />
    </form>
  );
};

export default Form;
