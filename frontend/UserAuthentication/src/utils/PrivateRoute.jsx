import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = false; // Assuming a placeholder for actual authentication logic

  console.log("private route working");

  return <>{isAuthenticated ? children : <Navigate to={"/login"} />}</>;
};

export default PrivateRoute;
