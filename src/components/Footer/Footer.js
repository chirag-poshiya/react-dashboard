/*eslint-disable*/

import React from "react";
// reactstrap components

import { Container, Nav, NavItem, NavLink } from "reactstrap";
// footer function
function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://www.desilo.studio/about">
              About Us
            </NavLink>
          </NavItem>
         
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="ch-icons icon-heart-2" /> by{" "}
          <a
            href="https://www.desilo.studio"
            target="_blank"
          >
            Desilo
          </a>{" "}
          for a better web.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
