import React, { useRef, useState } from 'react'
import '../../styles/search_bar.scss'
import { Col, Form, FormGroup } from 'reactstrap'
import style from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utils/config'

const ContainerBox = style.div`
 max-width:1200px;
 margin:auto;
`

function SearchList() {

    const locationRef = useRef('')
    const distanceRef = useRef('')
    const maxGroupSizeRef = useRef('')
    const navigate = useNavigate()

    const searchHandler = async () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;
        

        if (location === '' || distance === '' || maxGroupSize === '') {
            return alert('All Filed Are Required')
        }
        const res = await fetch(`${BASE_URL}/tours/search/getTourBySeaarch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
        

        if (!res.ok) alert('Something Wrong')
        const result = await res.json()   

        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {state : result.data})
    }

    return (
        <>
            <ContainerBox>
                <div className="Search_container">
                    <Col lg='12'>
                        <div className="search_bar">
                            <Form className='d-flex align-item-center gap-4' >
                                <FormGroup className='d-flex gap-3 form_group form_group_fast'>
                                    <span><i class="ri-map-pin-line"></i></span>
                                    <div>
                                        <h6>Location</h6>
                                        <input ref={locationRef} type="text" placeholder='Where Are you Going' />
                                    </div>
                                </FormGroup>
                                <FormGroup className='d-flex gap-3 form_group form_group_fast'>
                                    <span><i class="ri-map-pin-time-line"></i></span>
                                    <div>
                                        <h6>Distance</h6>
                                        <input ref={distanceRef} type="text" placeholder='Distance k/m' />
                                    </div>
                                </FormGroup>
                                <FormGroup className='d-flex gap-3 form_group '>
                                    <span><i class="ri-group-line"></i></span>
                                    <div>
                                        <h6>Max People </h6>
                                        <input ref={maxGroupSizeRef} type="text" placeholder='0' />
                                    </div>
                                </FormGroup>
                                <span className='search_icon' type='submit' onClick={searchHandler}>
                                    <i className='ri-search-line'></i>
                                </span>
                            </Form>
                        </div>
                    </Col>
                </div>
            </ContainerBox>
        </>
    )
}

export default SearchList
