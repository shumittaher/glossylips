import React, { useEffect, useState } from 'react'
import serverLocation from './../../../ServerLocation/serverlocation';
import { Paper, Typography, Divider } from '@mui/material/';
import newarrivalspackgroundwave from '../../../images/designpics/newarrivalspackgroundwave.png'
import { Box } from '@mui/system';

const NewArrivalsCard = ({ itemID }) => {

    const [newArrivalItem, setNewArrivalItem] = useState([])

    useEffect(() => {

        fetch(`${serverLocation}products/${itemID}`)
            .then(res => res.json())
            .then(data => setNewArrivalItem(data))

    }, [itemID])


    return (

        <Box sx={{
            display: 'flex',
            justifyContent: 'end'
        }}>
            <Paper elevation={24}
                sx={{
                    width: 360,
                    height: 420,
                    backgroundColor: '#f2c5c2',
                    backgroundImage: `url(${newarrivalspackgroundwave})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                    py: 5,
                    mt: 3
                }}
            >

                <Typography
                    sx={{
                        color: "purple",
                        fontFamily: 'Genos, sans-serif'

                    }}
                    variant='h5'>
                    Exciting New Arrival!
                </Typography>
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <Box
                        sx={{
                            mt: 7,
                            ml: -12,
                            border: 4,
                            width: 220,
                            height: 220,
                            borderRadius: '50%',
                            backgroundColor: 'pink',
                            overflow: 'hidden'
                        }}
                    >
                        <img
                            style={{
                                width: 220,
                                height: 220,
                                objectFit: 'cover',
                                opacity: '.8'
                            }}
                            src={newArrivalItem.imageLink} alt='' />
                    </Box>

                    <Box
                        sx={{

                            mt: 5,
                            ml: 3
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'white',
                                fontFamily: 'Architects Daughter, cursive'
                            }}
                            variant='h4'>
                            {newArrivalItem?.productTitle?.toUpperCase()}
                        </Typography>
                        <Divider />
                        <Box sx={{
                            display: 'flex',
                            mt: 2
                        }}>
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    mr: 2,
                                    fontFamily: 'Genos, sans-serif'

                                }}
                                align='left' variant="body1" display="inline" gutterBottom>
                                Brand:
                            </Typography>

                            <Typography sx={{
                                fontFamily: 'Architects Daughter, cursive'
                            }}
                                align='left' variant="body1" display="inline" gutterBottom>
                                {newArrivalItem.brand}
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',

                        }}>
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    mr: 2,
                                    fontFamily: 'Genos, sans-serif'

                                }}
                                align='left' variant="body1" display="inline" gutterBottom>
                                Type:
                            </Typography>

                            <Typography sx={{
                                fontFamily: 'Architects Daughter, cursive'
                            }}
                                align='left' variant="body1" display="inline" gutterBottom>
                                {newArrivalItem.type}
                            </Typography>
                        </Box>


                    </Box>

                </Box>
                <Typography
                    sx={{
                        ml: 10,
                        color: 'purple',
                        fontFamily: 'Genos, sans-serif'
                    }}
                    variant='h6'>
                    Our product will <br /> make you shine!
                </Typography>

            </Paper >
        </Box>
    )
}

export default NewArrivalsCard
