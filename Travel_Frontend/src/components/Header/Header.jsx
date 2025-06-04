import React, { useRef, useState, useContext } from "react";
import { Container, Row, Button, Col } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/Header.scss";
import logo from "../../assets/Images/Logo.png";
import styled from "styled-components";
import { AuthContext } from "../../context/authContext";


const ContainerBox = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

const navLinks = [
  { id: 1, path: "/home", display: "Home" },
  { id: 2, path: "/about", display: "About" },
  { id: 3, path: "/tours", display: "Tours" },
  { id: 4, path: "/contact", display: "Contact" },
];

function Header() {
  const navigate = useNavigate()
  const { user, dispatch } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const menuref = useRef(null)

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }

  return (
    <nav className="header">
      <ContainerBox>
        <Col>
          <Row>
            <div className="nav-container">
              {/* Logo */}
              <div className="logo-img">
                <NavLink to="/">
                  <img src={logo} alt="Logo" className="logo" />
                </NavLink>
              </div>

              {/* Navigation Links - Show/Hide on Small Screens */}

              <ul className={`nav-links ${isOpen ? "" : "show-nav"}`}>
                {navLinks.map((link) => (
                  <li key={link.id} className="nav_item">
                    <NavLink
                      to={link.path}
                      className={(navClass) => (navClass.isActive ? "active_link" : "")}
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}

                {/* Login & Register Buttons (Also in Menu for Small Screens) */}


                <div className="mobile-nav-btns">
                  <Button className="btn secondary__btn">
                    <NavLink to="/login" className="btn-link">
                      Log In
                    </NavLink>
                  </Button>
                  <Button className="btn primary__btn">
                    <NavLink to="/register" className="btn-link">
                      Register
                    </NavLink>
                  </Button>
                </div>
              </ul>

              {/* Right Section - Login & Register Buttons (For Desktop) */}

              <div className="nav_right d-flex align-items-center gap-4">
                <div className="nav_btn d-flex align-items-center gap-4">


                  {
                    user ?
                      (
                        <>
                          <h5 className="mb-0">{user.username}</h5>
                          <Button onClick={logout}>Logout</Button>
                        </>
                      )
                      :
                      (
                        <>
                          <Button className="btn secondary__btn">
                            <NavLink to="/login" className="btn-link">
                              Log In
                            </NavLink>
                          </Button>
                          <Button className="btn primary__btn">
                            <NavLink to="/register" className="btn-link">
                              Register
                            </NavLink>
                          </Button>
                        </>
                      )
                  }

                </div>
              </div>

              {/* Mobile Menu Toggle Button */}

              <span className="mobile_menu" onClick={() => setIsOpen(!isOpen)}>
                <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
              </span>
            </div>
          </Row>
        </Col>
      </ContainerBox>
    </nav>
  );
}

export default Header;
