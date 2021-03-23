import Card from "../components/Card";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <div className="homePage">
      <Card />
      <Button link="/cards/add" />
    </div>
  );
};

export default HomePage;
