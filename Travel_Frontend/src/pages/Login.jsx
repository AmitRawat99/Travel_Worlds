import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form, FormGroup, Col, Row, Button } from 'reactstrap'
import styled from 'styled-components'
import '../styles/login.scss'
import loginImg from '../assets/Images/login.png'
import usericon from '../assets/Images/user.png'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/authContext'
const ContainerBox = styled.div`
 max-width:1200px;
 width:100%;
 margin:auto;
`
function Login() {


  const [creditials, setcreditials] = useState({
    email: null,
    password: null,
  })

  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = e => {
    setcreditials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    e.preventDefault();
    console.log(creditials);
  }

  const handleClick = async e => {
    e.preventDefault()
    dispatch({ type: 'LOGIN_START' })
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          "content-type": "application/json"
        },
        creditials: 'include',
        body: JSON.stringify(creditials)
      })
      const result = await res.json()
      console.log(res);
      
      console.log(result);
      
      if (!res.ok) alert(result.message)
      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data })
      navigate('/') 
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message })
    }
  }

  return (
    <>
      <ContainerBox className='container-box'>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login-container ml-auto  d-flex align-items-center justify-content-between">
              <div className="login_img">
                <img src={loginImg} alt="" />
              </div>
              <div className="login_form">
                <div className="usericon">
                  <img src={usericon} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder='Email ' required id='email' name='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='password ' name='password' required id='password' onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary_btn auth_btn' type='submit'>
                    logIn
                  </Button>

                </Form>
                <p>Don't Have Any Account <Link to={'/register'} >Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </ContainerBox>
    </>
  )
}

export default Login
