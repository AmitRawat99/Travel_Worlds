import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form, FormGroup, Col, Row, Button } from 'reactstrap'
import styled from 'styled-components'
import '../styles/login.scss'
import RegisterImg from '../../public/Images/register.png'
import usericon from '../../public/Images/user.png'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const ContainerBox = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`

function Register() {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    email: '',
    user: '',
    password: '',
  })

  const { dispatch } = useContext(AuthContext)

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(credentials),
      })

      
      const result = await res.json()
      console.log(result);
      console.log(res);
      
      
      if (!res.ok) {
        alert(result.message || 'Something went wrong')
        return
      }

      dispatch({ type: 'REGISTER_SUCCESS' })
      navigate('/login')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <ContainerBox className='container-box'>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className='login-container ml-auto d-flex align-items-center justify-content-between'>
            <div className='login_img'>
              <img src={RegisterImg} alt='' />
            </div>
            <div className='login_form'>
              <div className='usericon'>
                <img src={usericon} alt='' />
              </div>
              <h2>Register</h2>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <input
                    type='text'
                    placeholder='User Name'
                    required
                    id='user'
                    name='username'
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type='text'
                    placeholder='Email'
                    required
                    name='email'
                    id='email'
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type='password'
                    placeholder='Password'
                    required
                    id='password'
                    name='password'
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button className='btn secondary_btn auth_btn' type='submit'>
                  Create Account
                </Button>
              </Form>
              <p>
                Already have an account? <Link to={'/login'}>Login</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </ContainerBox>
  )
}

export default Register
