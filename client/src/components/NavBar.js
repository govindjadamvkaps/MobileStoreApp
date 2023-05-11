import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-bootstrap";
import { FcIphone } from "react-icons/fc";
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from "react-router";
import { BsFillCartFill } from "react-icons/bs";


const NavBar = () => {
  const history = useNavigate()
  const [show, setShow] = useState(false);
  const [tokenn, setTokenn] = useState(null);

  
 

  const storedToken = localStorage.getItem("token");
  if (storedToken && !tokenn) {
    // set the token from local storage
    setTokenn(storedToken);
  }

  const handleClick = ()=>{
  const token =   localStorage.removeItem("token")
  localStorage.removeItem('_id')
    setTokenn(token)
    history("/")


    // history("/login")

  }
  
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <FcIphone /> Mobile Store
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setShow(!show);
            }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
            {tokenn ? (
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <LinkContainer to="/">
                    <NavLink className="nav-link active">Home</NavLink>
                  </LinkContainer>
                </li>
                <div className="m-2 ">
                    <li>
                <BsFillCartFill  style={{cursor:"pointer"}}/>
                </li>
                    </div>

                <li class="nav-item">
                  {/* <LinkContainer to="/logout">
                    <NavLink className="nav-link active"> */}
                    <button class="btn btn-outline-success" onClick={handleClick} type="submit">
                       Logout
                      </button>
                    {/* </NavLink> */}
                  {/* </LinkContainer> */}
                </li>
                   
               
              </ul>
            ) : (
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <LinkContainer to="/">
                    <NavLink className="nav-link active">Home</NavLink>
                  </LinkContainer>
                </li>
                <div className="m-2 ">
                    <li>
                <BsFillCartFill  style={{cursor:"pointer"}}/>
                </li>
                    </div>
                <li class="nav-item">
                  <LinkContainer to="/registrations">
                    <NavLink className="nav-link active">
                      <button class="btn btn-outline-success"  type="submit">
                        Sign Up
                      </button>
                    </NavLink>
                  </LinkContainer>
                </li>
                <li class="nav-item">
                  <LinkContainer to="/login">
                    <NavLink className="nav-link active">
                      <button class="btn btn-outline-success" type="submit">
                        Login
                      </button>
                    </NavLink>
                  </LinkContainer>
                </li>
                
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
