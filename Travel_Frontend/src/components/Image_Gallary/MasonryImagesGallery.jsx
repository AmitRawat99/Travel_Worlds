import React from 'react'
import galleryImages from './gallary_img'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function MasonryImagesGallery() {
    return (
        <>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
                <Masonry gutter='1rem'>
                    {
                        galleryImages.map((item, index) => (
                            <img className='masonry_img' src={item} key={index} alt="" style={{ width: '100%', display: 'block', borderRadius: '10px', cursor: 'pointer', }} />
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>
        </>
    )
}

export default MasonryImagesGallery
