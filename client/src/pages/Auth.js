import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/const";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const Auth = observer(() => {

    const navigate = useNavigate()
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
      try {
        let data;
        if (isLogin) {
          data = await login(email, password);
        } else {
          data = await registration(email, password);
        }
        user.setUser(user)
        user.setIsAuth(true)
        navigate(SHOP_ROUTE)
      } catch (e) {
        alert(e.response.data.message)
      }
    }

    return (
      <div>
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}>
          <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <Form className="d-flex flex-column">
              <Form.Control className="mt-3"
                            placeholder='Введите email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}/>
              <Form.Control className="mt-3"
                            placeholder='Введите пароль'
                            value={password}
                            onChange={e => setPassword(e.target.value)} type='password'/>
              <Row className="d-flex justify-content-between px-2">
                {isLogin ?
                  <div className="mt-3">Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink></div>
                  : <div className="mt-3">Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink></div>
                }

                <Button onClick={click} variant={"outline-danger"}
                        className="mt-3 ">{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
              </Row>
            </Form>
          </Card>
        </Container>
      </div>
    )
  }
)


export default Auth;