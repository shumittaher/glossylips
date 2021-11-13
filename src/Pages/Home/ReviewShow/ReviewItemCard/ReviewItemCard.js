import { Divider, Paper, Rating, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import serverLocation from '../../../../ServerLocation/serverlocation'
import quotationmark from '../../../../images/designpics/quotationmark.png'

const ReviewItemCard = ({ reviewedItem }) => {

    const [underlyingProduct, setUnderlyingProduct] = React.useState({})


    useEffect(() => {

        fetch(`${serverLocation}products/${reviewedItem.productId}`)
            .then(res => res.json()).then(data => setUnderlyingProduct(data))

    }, [reviewedItem.productId])


    return (


        <Paper elevation={3}
            sx={{
                display: 'flex',
                width: 400,
                height: 320,

            }}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                width: 200,
                height: 320,
                overflow: 'hidden'
            }}>
                <img style={{
                }} src={underlyingProduct.imageLink} alt="" />
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                p: 2
            }}>

                <Typography
                    sx={{
                        fontFamily: 'Architects Daughter, cursive'
                    }}

                    variant='h6'>
                    {underlyingProduct.productTitle?.toUpperCase()}
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexGrow: 1,
                    py: 1,


                }}>
                    <Box sx={{
                        flexGrow: 1,
                    }}>

                        <Typography
                            variant='body2'
                            align='left' gutterBottom>

                            <span
                                style={{
                                    fontWeight: 600,
                                    fontFamily: 'Genos, sans-serif',
                                    marginLeft: '10px'

                                }}
                            >

                                Brand:
                            </span>
                            <span
                                style={{
                                    fontFamily: 'Architects Daughter, cursive', marginLeft: '10px'

                                }}
                            >
                                {underlyingProduct.brand}
                            </span>
                        </Typography>

                        <Typography
                            variant='body2'
                            align='left' gutterBottom>
                            <span
                                style={{
                                    fontWeight: 600,
                                    fontFamily: 'Genos, sans-serif',
                                    marginLeft: '10px'

                                }}
                            >

                                Type:
                            </span>
                            <span
                                style={{
                                    fontFamily: 'Architects Daughter, cursive',
                                    marginLeft: '10px'
                                }}
                            >
                                {underlyingProduct.type}
                            </span>

                        </Typography>
                        <Box sx={{
                            display: 'flex',
                        }}>
                            < Typography style={{
                                fontWeight: 600,
                                fontFamily: 'Genos, sans-serif',
                                marginLeft: '10px'

                            }}
                                variant='body2'
                                align='left' gutterBottom>
                                Color:
                            </Typography>
                            <Box sx={{
                                ml: 2,
                                display: 'flex',
                                flexGrow: 1,
                                height: 20,
                                backgroundColor: `${underlyingProduct.color}`
                            }} />
                        </Box>

                        <Rating sx={{
                            py: 1
                        }} name="read-only" value={reviewedItem.rating} readOnly />
                        <Box
                            sx={{
                                width: '100%',
                                height: 100,
                                border: 1,
                                borderRadius: 2,
                                backgroundImage: `url(${quotationmark})`,
                                backgroundSize: '24px 24px',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >

                            <Typography
                                sx={{
                                    fontFamily: 'Caveat, cursive',
                                    fontSize: '1.5em',
                                    my: 2,
                                    textOverflow: 'ellipsis',

                                }}
                                variant='body2' component='div' textAlign='center'>
                                {reviewedItem.userComment}
                            </Typography>

                        </Box>


                        <Typography
                            sx={{
                                fontFamily: 'Genos, sans-serif',
                            }}
                            variant='caption' component='div' textAlign='right'>
                            -  {reviewedItem.ratingGivenBy}
                        </Typography>

                    </Box>


                </Box>

            </Box>


        </Paper >
    )
}

export default ReviewItemCard
