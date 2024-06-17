import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import PurchaseOrders from "./components/PurchaseOrders";
import Payments from "./components/Payments";
import ControlsVisibility from "./components/ControlsVisibility";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/purchase-orders" component={PurchaseOrders} />
          <Route path="/payments" component={Payments} />
          <Route path="/controls-visibility" component={ControlsVisibility} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
