import React, { useState } from 'react'
import CommonSection from '../components/shared/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import TourCard from '../components/shared/TourCards'
import NewsLatter from  '../components/shared/NewsLatter'

function SearchResultList() {
  const location = useLocation()
  const [data] = useState(location.state || [])
  return (
    <>
      <CommonSection title="Tour Search Result" />
      <section>
        <Container>
          <Row>
            {
              data.length === 0 ? (
                <h4 className='text-center font-bold'>No Found Tours</h4>
              ) : (
                data.map((tour) => {
                  return (
                    <Col lg='3' className='mb-4' key={tour._id}>
                      <TourCard tour={tour} />
                    </Col>
                  );
                })
              )
            }
          </Row>
        </Container>
        <NewsLatter/>
      </section>
    </>
  )
}

export default SearchResultList
