import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <h1>Welcome, {location.state.userName}!</h1>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};
export default HomePage;
