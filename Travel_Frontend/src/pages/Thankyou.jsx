import React from 'react'
import { Container, Col, Row, Button } from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../styles/thank_you.scss'
const ContainerBox = styled.div`
 max-width:1200px;
 width:100%;
 margin:auto;
`

function Thankyou() {
    return (
        <>
            <ContainerBox className=' mt-1 ' style={{marginBottom:'4rem'}}>
                <Col lg='12' className='pt-5 text-center'>
                    <div className="thank_you">
                        <span><i className='ri-checkbox-circle-line'></i></span>
                        <h1 className='mb-3 fw-semibold'>Thank You</h1>
                        <h3 className='mb-4 '>Your Tour Is Booked</h3>
                        <Button className='btn primary__btn w-25 '><Link to={'/home'}>Back To Home</Link></Button>
                    </div>
                </Col>
            </ContainerBox>
        </>
    )
}

export default Thankyou
