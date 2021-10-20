import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Booking from "./components/Booking/Booking/Booking";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Shared/Header/Header";
import Login from "./components/Login/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Page from "./components/Page/Page";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Page title="Home">
                <Home />
              </Page>
            </Route>
            <Route path="/home">
              <Page title="Home">
                <Home />
              </Page>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Page title="Booking">
                <Booking />
              </Page>
            </PrivateRoute>
            <Route path="/login">
              <Page title="Log In">
                <Login />
              </Page>
            </Route>
            <Route path="*">
              <Page title="Page Not Found">
                <NotFound />
              </Page>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
