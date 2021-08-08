import React, { useContext } from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import { AuthContext } from "../auth/AuthContext";

const AppRouter = () => {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={user.logged} />

          <PrivateRoute path="/" component={DashboardRoutes} isAuthenticated={user.logged} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
