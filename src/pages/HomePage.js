import Card from "../components/Card";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <div className="homePage">
      <Card link />
      <Button link="/cards/add" />
    </div>
  );
};

export default HomePage;
