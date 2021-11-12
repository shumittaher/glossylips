import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../../images/banner/image1.jpg'
import image2 from '../../../images/banner/image2.jpg'
import image3 from '../../../images/banner/image3.jpg'

const imageArray = [
    image1, image2, image3
]

const Banner = () => {

    const [bannerImage, setBannerImage] = useState(0)

    useEffect(() => {
        setTimeout(() => { (bannerImage < 2) ? setBannerImage(bannerImage + 1) : setBannerImage(0) }, 5000)
    }, [bannerImage])



    return (
        <>
            <Box
                sx={{
                    mt: 10,
                }}
            >
                <Box sx={{
                    width: '100%',
                    height: { xs: '40vh', sm: '80vh' },

                }}>
                    <img
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',

                        }}
                        src={imageArray[bannerImage]} alt="" />
                </Box>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    backgroundImage: 'linear-gradient(to top right, #e3b3e8, #e8b3c4, #d5b3e8)',
                    color: 'white',
                    py: 3
                }}
            >

                <Typography variant="h6">Sensual Lips are just a click away</Typography>

                <Typography variant="h3" gutterBottom> With Glossy Lips products</Typography>

                <Link
                    style={{
                        textDecoration: 'none'
                    }}
                    to="/explore">
                    <Button
                        sx={{
                            backgroundColor: 'hotpink',
                            "&:hover": { backgroundColor: 'purple' }
                        }}
                        variant="contained" size="large">
                        Explore More
                    </Button>
                </Link>

            </Box>
        </>

    )
}

export default Banner
