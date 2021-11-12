import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import axios from 'axios';
import serverLocation from '../../../ServerLocation/serverlocation';

const LittleCards = ({ myorder, handleCancelOrder }) => {

    const [item, setItem] = useState({})

    useEffect(() => {
        axios(`${serverLocation}products/${myorder.productId}`).then(res => setItem(res.data))
    }, [myorder.productId])

    const handleConfirmationOrder = () => {
        alert('payment option coming soon')
    }

    return (
        <Paper elevation={3}
            sx={{
                display: 'flex',
                width: 400,
                height: 120,

            }}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                width: 120,
                height: 120,
                overflow: 'hidden'
            }}>
                <img style={{
                }} src={item.imageLink} alt="" />
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
            }}>

                <Typography variant='h6'>
                    {item.productTitle?.toUpperCase()}
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexGrow: 1,
                    p: 1
                }}>
                    <Box sx={{
                        width: '50%',
                    }}>

                        <Typography
                            variant='body2'
                            align='left' gutterBottom>
                            Brand: {item.brand}
                        </Typography>

                        <Typography
                            variant='body2'
                            align='left' gutterBottom>
                            Type: {item.type}
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
                                backgroundColor: `${item.color}`
                            }} />

                        </Box>

                    </Box>

                    <Box sx={{
                        width: '50%',
                    }}>

                        <Button onClick={() => handleCancelOrder(myorder)}>Cancel Order</Button>

                        <Button onClick={handleConfirmationOrder}>Confirm Order</Button>


                    </Box>


                </Box>

            </Box>


        </Paper >
    )
}

export default LittleCards
