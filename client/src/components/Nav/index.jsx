// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css"

function Nav() {

    return(
    <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <a class="navbar-brand" href="index.html">
          <span>
            Finexo
          </span>
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  ">
            <li class="nav-item ">
              <a class="nav-link" href="index.html">Home </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="about.html"> About <span class="sr-only">(current)</span> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="service.html">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="why.html">Why Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="team.html">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> <i class="fa fa-user" aria-hidden="true"></i> Login</a>
            </li>
            <form class="form-inline">
              <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
    )
  };

export default Nav;
