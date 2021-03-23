import Card from "../components/Card";
import Button from "../components/Button";

const HomePage = ({ cards }) => {
  return (
    <div className="homePage">
      <h1>My Cards</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          id={index}
          name={card.name}
          cardNumber={card.cardNumber}
          expiry={card.expiry}
          link
        />
      ))}
      <Button link="/cards/add" />
    </div>
  );
};

export default HomePage;
