import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/LoginForm/Dashboard/Dashboard';
import PrivateRoute from './components/LoginForm/PrivateRoute/PrivateRoute';
import SignUpForm from './components/LoginForm/SignUpForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
