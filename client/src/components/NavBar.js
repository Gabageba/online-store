import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/const";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      localStorage.removeItem('token')
    }

    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color:'white', textDecoration: 'none'}} to={SHOP_ROUTE}>Амбасадор</NavLink>
          {user.isAuth ?
            <Nav>
              <Button variant={"outline-light"}
                      onClick={() => {
                        navigate(ADMIN_ROUTE)
                      }}>
                Админ панель
              </Button>
              <Button className="mx-2"
                      variant={"outline-danger"}
                      onClick={() => {
                        logOut()
                      }}>
                Выйти
              </Button>
            </Nav>
            :
            <Nav>
              <Button variant={"outline-danger"} onClick={() => {
                navigate(LOGIN_ROUTE)
              }}>Авторизация</Button>
            </Nav>
          }
        </Container>
      </Navbar>
    )
  }
)

export default NavBar;