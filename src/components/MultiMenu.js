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

export default function NavbarDropdown({
  allCataData,
  catagoriWisesub,
  isMegaMenu,
  toggleDrawer,
}) {
  console.log("isMegaMenu", isMegaMenu);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <div class="mobile-nav-toggler" onClick={toggleDrawer}>
        <span class="icon flaticon-menu"></span>
      </div>
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
                {allCataData.map((item, index) => (
                  <MDBDropdownItem
                    key={index}
                    onMouseEnter={() => catagoriWisesub(true, item._id)}
                    onMouseLeave={() => catagoriWisesub(false, item._id)}
                  >
                    <NavLink to="#">{item.name} &raquo;</NavLink>
                    <ul className="dropdown-menu dropdown-submenu">
                      {isMegaMenu === undefined
                        ? ""
                        : isMegaMenu.map((item, index) => (
                            <MDBDropdownItem key={index}>
                              <NavLink to="#">{item.name}</NavLink>
                            </MDBDropdownItem>
                          ))}
                    </ul>
                  </MDBDropdownItem>
                ))}
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
