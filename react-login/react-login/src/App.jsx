import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./login";
import HomePage from "./home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="home" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
