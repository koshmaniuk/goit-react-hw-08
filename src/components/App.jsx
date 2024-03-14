import "./App.css";
// import ContactList from "./ContactList/ContactList.jsx";
// import SearchBox from "./SearchBox/SearchBox.jsx";
// import ContactForm from "./ContactForm/ContactForm.jsx";
// import { fetchContacts } from "../redux/operations";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

import { Layout } from "./Layout";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const TasksPage = lazy(() => import("../pages/Contacts"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/tasks"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute redirectTo="/login" component={<TasksPage />} />
            }
          />
        </Route>
      </Routes>
      {/* <Toaster /> */}
    </>
  );
};

export default App;
