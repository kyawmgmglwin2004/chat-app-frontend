import "./App.css";
import "./index.css";
import Login from "./pages/Login";
import Term from "./pages/TermsAndCondition";
import ForgotPsw from "./pages/ForgotPsw";
import ChatRoom from "./pages/ChatDashboard/ChatRoom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Outlet,
  Navigate,
  // HashRouter,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/term" element={<Term />}></Route>
        <Route path="/forgotpsw" element={<ForgotPsw />}></Route>
        <Route path="/" element={<ChatRoom />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
