// Import Components
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";

import { Switch, Route, Redirect } from "react-router-dom";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/cards" />
        </Route>
        <Route path="/cards" exact>
          <HomePage />
        </Route>
        <Route path="/cards/add">
          <AddPage />
        </Route>
        <Route path="/cards/:id/edit">
          <EditPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
