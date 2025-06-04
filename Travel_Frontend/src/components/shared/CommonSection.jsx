import React from 'react'
import { Col, Row } from 'reactstrap'
import styled from 'styled-components'


const ContainerBox = styled.div`
 max-width:1200px;
 width:100%;
 margin:auto;
`


function CommonSection({ title }) {
  return (
    <>
      <section className="common_section">
        <ContainerBox>
          <Row>
            <Col lg='12'><h1>{title}</h1></Col>
          </Row>
        </ContainerBox>
      </section>

    </>
  )
}

export default CommonSection
