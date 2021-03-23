// Import Components
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";

import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import "./styles/app.css";

function App() {
  const getCards = () => {
    let cards;
    if (localStorage.getItem("cards") === null) {
      cards = [];
    } else {
      cards = JSON.parse(localStorage.getItem("cards"));
    }
    return cards;
  };
  const [cards, setCards] = useState(getCards);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/cards" />
        </Route>
        <Route path="/cards" exact>
          <HomePage cards={cards} />
        </Route>
        <Route path="/cards/add">
          <AddPage getCards={getCards} />
        </Route>
        <Route path="/cards/:id/edit">
          <EditPage cards={cards} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
