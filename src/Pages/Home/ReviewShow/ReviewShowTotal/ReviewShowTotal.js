import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'
import ReviewItemCard from '../ReviewItemCard/ReviewItemCard';
import serverLocation from './../../../../ServerLocation/serverlocation';
import Slide from '@mui/material/Slide';


const ReviewShowTotal = () => {
    const [fewReviews, setFewReviews] = useState([])
    const [reviewPage, setReviewPage] = useState(0)
    const pageCount = (Math.ceil(fewReviews.length / 2))
    const [checked, setChecked] = React.useState(false);
    const [checkedAlt, setCheckedAlt
    ] = React.useState(false);

    useEffect(() => {
        setTimeout(() => { (reviewPage + 1 < pageCount) ? setReviewPage(reviewPage + 1) : setReviewPage(0) }, 4000)
        if (reviewPage % 2 === 0) {
            setChecked(true)
            setCheckedAlt(false)
        } else {
            setChecked(false)
            setCheckedAlt(true)

        }
    }, [reviewPage, pageCount])

    let pageItemsAlternate = []

    fewReviews.map((item, index) => {
       if ((index === (reviewPage * 2) + 2) || (index === (reviewPage * 2) + 3)) {
            pageItemsAlternate.push(item)
        } else if (reviewPage + 1 === pageCount) {
            if (index === 0 || index === 1) { pageItemsAlternate.push(item) }
        }

        return null
    })


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
                <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 5,
                        }}
                    >

                        {
                            pageItemsAlternate.map(reviewedItem => <ReviewItemCard key={reviewedItem._id} reviewedItem={reviewedItem}></ReviewItemCard>)
                        }

                    </Box>

                </Slide>
                <Slide direction="left" in={checkedAlt} mountOnEnter unmountOnExit>


                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 5,
                        }}
                    >

                        {
                            pageItemsAlternate.map(reviewedItem => <ReviewItemCard key={reviewedItem._id} reviewedItem={reviewedItem}></ReviewItemCard>)
                        }

                    </Box>
                </Slide>

            </Box>
        </>
    )
}

export default ReviewShowTotal
