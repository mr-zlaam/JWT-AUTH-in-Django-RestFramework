import {} from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderBar from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderBar />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
