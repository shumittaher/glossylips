import { Container,  Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import serverLocation from '../../../ServerLocation/serverlocation'
import ReviewForm from './../ReviewForm/ReviewForm';

const ReviewProduct = ({ user }) => {

    const [myReviewOrders, setMyReviewOrders] = useState([])

    useEffect(() => {

        axios.get(`${serverLocation}orders`, {
            params: {
                email: user.email
            }
        }).then(res => setMyReviewOrders(res.data))
    }, [user.email])


    return (
        <Container>

            <Box sx={{
                mt: 10,
            }}>

                <Typography variant="h6" component="div"
                    sx={{
                        fontWeight: 'bold',
                        py: 1
                    }}>
                    Review Our Products
                </Typography>
                <Box sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}
                    >


                        {
                            myReviewOrders.map(myReviewOrder => <ReviewForm myReviewOrder={myReviewOrder} user={ user }></ReviewForm>)
                        }


                    </Box>

                </Box>
            </Box>
        </Container>
    )
}

export default ReviewProduct
