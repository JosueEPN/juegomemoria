import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";
import React from "react";
import Music from "./Music";
import Direc1 from "../images/Blackjack.jpg";
import Direc2 from "../images/Buscaminas.png";
const { SubMenu } = Menu;

class MenuSUP extends React.Component {
  handleClick = (e) => {
    console.log("click ", e);
  };

  render() {
    return (
      <Menu onClick={this.handleClick} style={{ width: 256 }} mode="inline">
        <SubMenu key="sub1" icon={<MailOutlined />} title="GAMES">
          <Menu.Item key="1">
            <div className="Game">
              <img src={Direc1} className="Direction" />
              <h1> Black Jack</h1>
            </div>
          </Menu.Item>
          <Menu.Item key="2">
            <div className="Game">
              <img src={Direc2} className="Direction" />
              <h1>Buscaminas</h1>
            </div>
          </Menu.Item>

          <Menu.Item key="3">
            <div className="Game1">
              <Music />
            </div>
          </Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default MenuSUP;

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>;
