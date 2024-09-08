import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

export default function NavbarDropdown() {
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarNav>
          <MDBNavbarItem>
            <NavLink to="/">Home</NavLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <NavLink to="/how-it-work">How Its Work</NavLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="nav-link">
                Services
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <NavLink to="#">Action</NavLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <NavLink to="#">Another action</NavLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <NavLink to="#">Submenu &raquo;</NavLink>
                  <ul className="dropdown-menu dropdown-submenu">
                    <MDBDropdownItem>
                      <NavLink to="#">Submenu item 1</NavLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <NavLink to="#">Submenu item 2</NavLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <NavLink to="#">Submenu item 3 &raquo;</NavLink>
                      <ul className="dropdown-menu dropdown-submenu">
                        <MDBDropdownItem>
                          <NavLink to="#">Multi level 1</NavLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <NavLink to="#">Multi level 2</NavLink>
                        </MDBDropdownItem>
                      </ul>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <NavLink to="#">Submenu item 4</NavLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <NavLink to="#">Submenu item 5</NavLink>
                    </MDBDropdownItem>
                  </ul>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <NavLink to="/benifits">Benefits </NavLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <NavLink to="/review">Review</NavLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <NavLink to="/faq">Faq</NavLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <NavLink to="/about-us">About</NavLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <NavLink to="/blog">Blog</NavLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}
