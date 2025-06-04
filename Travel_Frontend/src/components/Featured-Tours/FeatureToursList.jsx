import React, { useEffect } from 'react'
import TourCards from '../shared/TourCards'
import TourData from '../../assets/data/tour'
import { Col } from 'reactstrap'

import useFetch from '../../hooks/userFetch'
import { BASE_URL } from '../../utils/config'

function FeatureToursList() {

    const { data: featureTours, loading, error, } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)
    return (
        <>
            {
                loading && <h4 className='text-center text-xs text-black-500 font-bold'>Loading...</h4>
            }
            {
                error && <h4>{error}</h4>
            }

            {!loading && !error && featureTours?.map((tour, idx) => (
                <Col lg="3" className="mb-4" key={idx}>
                    <TourCards tour={tour} />
                </Col>
            ))}
        </>
    )
}

export default FeatureToursList


