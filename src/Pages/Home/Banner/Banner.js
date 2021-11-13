import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../../images/banner/image1.jpg'
import image2 from '../../../images/banner/image2.jpg'
import image3 from '../../../images/banner/image3.jpg'
import bgsplash from '../../../images/designpics/bgsplash.png'

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
                    <Box
                        className="glampic"
                        sx={{
                            opacity: { xs: 0, md: 1 },
                            position: 'absolute',
                            width: 320,
                            height: 140,
                            top: '30%',
                            left: '7%',
                            backgroundImage: `url(${bgsplash})`,
                            backgroundRepeat: 'no-repeat',
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'start',
                            flexDirection: 'column',
                            backgroundSize: '320px 80px',
                            backgroundPosition: 'left bottom'
                        }}>
                        <Typography
                            style={{
                                fontFamily: 'Passions Conflict, cursive', color: 'Orange',
                                lineHeight: .5,
                                transform: 'rotate(-5deg)'
                            }}
                            variant="h1">Feel Pretty
                        </Typography>
                        <Typography
                            style={{
                                fontFamily: 'Passions Conflict, cursive', color: 'white',
                                lineHeight: .5,
                                transform: 'rotate(-5deg)'
                            }}
                            variant="h3">Look Nice
                        </Typography>
                    </Box>


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

                <Typography
                    sx={{
                        fontFamily: 'Passions Conflict, cursive',
                        fontSize: { xs: '2rem', md:'3.5rem' }
                    }}
                    variant="h3">Sensual Lips are just a click away</Typography>

                <Typography
                    sx={{
                        fontFamily: 'Passions Conflict, cursive',
                        color: "purple",
                        fontSize: { xs: '3rem', md:'6rem' }
                    }}
                    variant="h1"> With Glossy Lips products</Typography>

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
