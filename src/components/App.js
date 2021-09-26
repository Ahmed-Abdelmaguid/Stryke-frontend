import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Verify from "./Verify";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/api/login" component={Login} />
          <Route exact path="/api/register" component={Register} />
          <Route exact path="/api/verify" component={Verify} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
