import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home";
import Students from "./components/Students";
import Student from "./components/Student";
import Payments from "./components/Payments";
import AllPayments from "./components/AllPayments";
import Tickets from "./components/Tickets";
import Nav from "./components/Nav";
import { useState } from "react";
function App() {
  const local_user_id = localStorage.getItem("alphstains-secret-user-id");
  const token = localStorage.getItem("alphstains-secret-user-token");
  const [currentUser, setCurrentUser] = useState("");
  const [profile, setProfile] = useState([]);

  let logoutButton;
  if (local_user_id) logoutButton = <Logout />;
  if (!local_user_id) logoutButton = null;
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/home"
            element={<Home local_user_id={local_user_id} />}
          />
          <Route
            path="/login"
            element={<Login local_user_id={local_user_id} token={token} />}
          />
          <Route path="/home/students" element={<Students />} />
          <Route path="/home/students/:student_id" element={<Student />} />
          <Route
            path="/home/students/:student_id/payments"
            element={<Payments />}
          />
          <Route path="/home/payments" element={<AllPayments />} />
          <Route path="/home/tickets" element={<Tickets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
