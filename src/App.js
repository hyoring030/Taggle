import { Mainpage } from "./page/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaverLogin from "./page/NaverLogin";
import PostScrap from "./page/PostScrap/PostScrap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NaverLogin />} />
        <Route path="/naverLogin" element={<Mainpage />} />
        <Route path="/postScrap" element={<PostScrap />} />
      </Routes>
    </Router>
  );
}

export default App;
