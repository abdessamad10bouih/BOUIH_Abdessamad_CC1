import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./activité 3/Home";
import LoginForm from "./activité 3/LoginForm";
import WelcomePage from "./activité 3/WelcomePage";
import HomeSujet1 from "./Sujet1/HomeSujet1";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeSujet1 />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/sujet1" element={<HomeSujet1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
