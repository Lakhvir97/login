import "./App.css";
import Login from "./Login";
import LogoutPerson from "./LogoutPerson";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route
          path="/login"
          element={
            <PrivateRoute>
              <LogoutPerson />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
