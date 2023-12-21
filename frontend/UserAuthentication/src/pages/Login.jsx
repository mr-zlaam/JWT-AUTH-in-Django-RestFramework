import {} from "react";
import "./page.css";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <form action="">
          <input type="text" name="username" placeholder="Enter username" />
          <input type="password" name="password" placeholder="Enter password" />
          <input type="submit" onClick={handleSubmit} />
        </form>
      </div>
    </>
  );
};

export default Login;
