import { Mainpage } from "./page/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaverLogin from "./page/NaverLogin";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NaverLogin />} />
        <Route path="/naverLogin" element={<Mainpage />} />

      </Routes>
    </Router>
  );
}

export default App;
