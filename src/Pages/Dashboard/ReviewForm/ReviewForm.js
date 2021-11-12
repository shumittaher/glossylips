import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import serverLocation from '../../../ServerLocation/serverlocation';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


const ReviewForm = ({ myReviewOrder, user }) => {

    const [valueRating, setValueRating] = React.useState(5);
    const [hoverRating, setHoverRating] = React.useState(-1);
    const [comment, setComment] = React.useState('');
    const [reviewItem, setReviewItem] = useState({})

    useEffect(() => {
        axios(`${serverLocation}products/${myReviewOrder.productId}`).then(res => setReviewItem(res.data))
    }, [myReviewOrder.productId])

    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    const handleCommentsChange = (e) => {
        const comment = e.target.value
        setComment(comment)
    }
    const handleAddReview = (e) => {

        const review = {

            productId: myReviewOrder.productId,
            ratingGivenBy: user.displayName,
            raterEmail: user.email,
            userComment: comment,
            rating: valueRating,
        }

        console.log(review)
        e.preventDefault()

        fetch(`${serverLocation}review`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('review added')
                }
            })
    }

    return (
        <>

            <Paper elevation={3}
                sx={{
                    display: 'flex',
                    width: 400,
                    height: 300,
                }}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: 200,
                    height: 300,
                    overflow: 'hidden'
                }}>
                    <img style={{
                    }} src={reviewItem.imageLink} alt="" />
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    p: 2
                }}>

                    <Typography variant='h6'>
                        {reviewItem.productTitle?.toUpperCase()}
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        flexGrow: 1,
                        p: 1,

                    }}>
                        <Box sx={{
                            flexGrow: 1,
                        }}>

                            <Typography
                                variant='body2'
                                align='left' gutterBottom>
                                Brand: {reviewItem.brand}
                            </Typography>

                            <Typography
                                variant='body2'
                                align='left' gutterBottom>
                                Type: {reviewItem.type}
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                            }}>
                                < Typography
                                    variant='body2'
                                    align='left' gutterBottom>
                                    Color:
                                </Typography>
                                <Box sx={{
                                    ml: 2,
                                    display: 'flex',
                                    flexGrow: 1,
                                    height: 20,
                                    backgroundColor: `${reviewItem.color}`
                                }} />

                            </Box>
                        </Box>


                    </Box>

                </Box>


            </Paper >
            <Paper elevation={3}
                sx={{
                    display: 'flex',
                    width: 400,
                    height: 300,
                }}>
                <form
                    style={{
                        width: 400,
                        paddingTop: '10px'
                    }}
                    onSubmit={handleAddReview}
                >
                    <Box
                        sx={{
                            paddingTop: 2
                        }}
                    >
                        <Rating
                            name="hover-feedback"
                            value={valueRating}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setValueRating(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHoverRating(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {valueRating !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hoverRating !== -1 ? hoverRating : valueRating]}</Box>
                        )}
                    </Box>
                    <TextField

                        multiline
                        rows={4}
                        onChange={handleCommentsChange}
                        margin="normal"
                        sx={{ width: '80%' }}
                        label="Comments"
                        name='comments'
                        variant="outlined" />

                    <Button variant="contained" type='submit'
                        sx={{
                            width: '80%',
                            my: 2,
                        }}>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                            }}>
                            Add Review
                        </Typography>
                    </Button>

                </form>

            </Paper>
        </>

    )
}

export default ReviewForm
