import { useState } from "react";
import { useNavigate } from "react-router-dom";

const userData = {
  u: "Bob",
  p: "12345",
};

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userName = formData.get("username");
    const password = formData.get("password");
    if (userName === userData.u && password === userData.p) {
      setIsLoggedIn(true);
      navigate("/home", { state: { userName: userName } });
    } else {
      alert("Login or password are incorrect!");
    }
  };

  return (
    <div className="container">
      <h1>Login to your account</h1>
      <form className="form-name" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Enter your name" />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default LoginPage;
