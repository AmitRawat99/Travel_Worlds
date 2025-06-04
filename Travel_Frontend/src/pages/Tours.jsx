import React, { useState, useEffect } from 'react'
import CommonSection from '../components/shared/CommonSection'
import '../styles/CommonSection.scss'
import styled from 'styled-components'
import TourData from '../assets/data/tour'
import TourCards from '../components/shared/TourCards'
import SearchList from '../components/shared/SearchList'
import NewsLatter from '../components/shared/NewsLatter'
import { Row, Col } from 'reactstrap'
import useFetch from '../hooks/userFetch'
import { BASE_URL } from '../utils/config'


const ContainerBox = styled.div`
 max-width:1200px;
 width:100%;
 margin:auto;
`



function Tours() {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)


  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page + 1}`)
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)


  useEffect(() => {
    const pages = Math.ceil(tourCount / 8)
    setPageCount(pages)
    window.scrollTo(0, 0)
  }, [page, tourCount])


  return (
    <>
      <CommonSection title={'All Tours'} />
      <section>
        <ContainerBox>
          <Row>
            <SearchList />
          </Row>
        </ContainerBox>
      </section>
      <section className='pt-0 mt-0'>
        <ContainerBox>
          {
            loading && <h4 className='text-center pt-5'>Loading....</h4>
          }
          {
            error && <h4 className='text-center pt-5'>{error}</h4>
          }
          {
            !loading && !error && <Row>
              {
                tours?.map((tour, idx) => {
                  return (
                    <Col lg='3' key={idx} className='mb-4'>
                      <TourCards tour={tour} />
                    </Col>
                  )
                })
              }

              {/* <Col lg='12'>
                <div className="pagination d-flex align-item-center justify-content-center mt-4  gap-3">
                  {[...Array(pageCount).keys()].map(number => (
                    <span key={number} onClick={() => setPage(number)} className={page === number ? 'active_page' : ''}>
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col> */}

              {pageCount > 0 && (
                <Col lg='12'>
                  <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                    {[...Array(pageCount).keys()].map(number => (
                      <span
                        key={number}
                        onClick={() => setPage(number)}
                        className={page === number ? 'active_page' : ''}
                      >
                        {number + 1}
                      </span>
                    ))}
                  </div>
                </Col>
              )}


            </Row>
          }
        </ContainerBox>
        <NewsLatter />
      </section>
    </>
  )
}

export default Tours
