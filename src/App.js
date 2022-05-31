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
import ClassPayment from "./components/ClassPayment";
import Logs from "./components/Logs";
import UpcomingClass from "./components/UpcomingClass";
import Notes from "./components/buttons/Notes";
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
          <Route path="/" element={<Home local_user_id={local_user_id} />} />
          <Route
            path="/login"
            element={<Login local_user_id={local_user_id} token={token} />}
          />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:student_id" element={<Student />} />
          <Route path="/payments/:student_id/" element={<Payments />} />
          {/* <Route path="/home/payments" element={<AllPayments />} />
          <Route path="/home/tickets" element={<Tickets />} />
          <Route path="/home/payment/:class_id" element={<ClassPayment />} /> */}
          <Route path="/logs" element={<Logs />} />
          <Route path="/today" element={<UpcomingClass />} />
          <Route path="/notes/:class_id" element={<Notes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
