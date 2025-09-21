import './App.css'
import Login  from './pages/Login';
import Term from './pages/TermsAndCondition'
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
           <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/term" element={<Term/>}></Route>
        </Routes>
      </Router>
  )
}

export default App
