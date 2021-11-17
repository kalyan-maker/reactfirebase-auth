import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Profilepage from "./pages/Profilepage";
import TestPage from "./pages/TestPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import NotfoundPage from "./pages/NotfoundPage";
import { useAuth } from "./Context/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <ProtectedRoute exact path="/login" component={Loginpage} />
        <ProtectedRoute exact path="/register" component={Registerpage} />
        <ProtectedRoute exact path="/profile" component={Profilepage} />
        <ProtectedRoute exact path="/test" component={TestPage} />
        <ProtectedRoute
          exact
          path="/forgot-password"
          component={ForgotPasswordPage}
        />
        <ProtectedRoute
          exact
          path="/reset-password"
          component={ResetPasswordPage}
        />
        <Route exact path="*" component={NotfoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

function ProtectedRoute(props) {
  const { currentUser } = useAuth();
  const { path } = props;
  console.log("path", path);
  const location = useLocation();
  console.log("location state", location.state);

  if (
    path === "/login" ||
    path === "/register" ||
    path === "/forgot-password" ||
    path === "/reset-password"
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? "/profile"} />
    ) : (
      <Route {...props} />
    );
  }
  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: path },
      }}
    />
  );
}
