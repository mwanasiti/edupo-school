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
      <Link to="/" className="font-black text-2xl">
        EDUPO
      </Link>

      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="container">
   
    <a class="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
        height="16"
        alt="MDB Logo"
        loading="lazy"
        style="margin-top: -1px;"
      />
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
   
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
      </ul>
     

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-link px-3 me-2">
          Login
        </button>
        
        <a
          class="btn btn-dark px-3"
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </div>
    
  </div>

</nav>
