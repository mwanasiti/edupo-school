import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogout() {
    switch (user.role) {
      case "admin":
        fetch("/admin_logout", {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate("/");
          }
        });
        break;
      case "teacher":
        fetch("/teacher_logout", {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate("/");
          }
        });
        break;
      case "student":
        fetch("/student_logout", {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate("/");
          }
        });
        break;
      case "parent":
        fetch("/parent_logout", {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate("/");
          }
        });
        break;
    }
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-our-black p-6">
      <Link to="/" className="heading" style={{fontSize:'35px',fontWeight:'bolder', fontFamily:'cursive',color:'black'}}>
        EDUPO
      </Link>

      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link style={{fontSize:'28px', fontWeight:'bold', fontFamily:'cursive'}} to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;


