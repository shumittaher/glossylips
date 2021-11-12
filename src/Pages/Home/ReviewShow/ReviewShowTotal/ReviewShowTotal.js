import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'
import ReviewItemCard from '../ReviewItemCard/ReviewItemCard';
import serverLocation from './../../../../ServerLocation/serverlocation';
import Slide from '@mui/material/Slide';


const ReviewShowTotal = () => {
    const [fewReviews, setFewReviews] = useState([])
  
    useEffect(() => {

        fetch(`${serverLocation}review?limit=6`)
            .then(res => res.json())
            .then(result => {
                setFewReviews(result)
            })

    }, [])

    return (
        <>

            <Box
                sx={{
                    width: '100%',
                    backgroundImage: 'linear-gradient(to top right, #e3b3e8, #e8b3c4, #d5b3e8)',
                    color: 'white',
                    py: 5,
                    my: 4
                }}
            >


                <Typography variant='h3' gutterBottom>
                    What our Customers Say About Us
                </Typography>
            </Box>

            <Box
                sx={{
                    overflow: 'hidden',
                    height: 360
                }}
            >
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 5,
                        }}
                    >

                        {
                            fewReviews.map(reviewedItem => <ReviewItemCard key={reviewedItem._id} reviewedItem={reviewedItem}></ReviewItemCard>)
                        }

                    </Box>

                </Slide>
               

            </Box>
        </>
    )
}

export default ReviewShowTotal
