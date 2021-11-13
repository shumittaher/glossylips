import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';


const ProductCards = ({ product }) => {

    const { productTitle, brand, type, price, color, imageLink, _id } = product


    return (


        <Card sx={{
            mx: 'auto', height: 500,
        }} elevation={24} >

            <CardMedia
                component="img"
                height="280"
                image={imageLink}
                alt="green iguana"
            />


            <Box sx={{
                display: 'flex',
                height: 170,
            }}>

                <CardContent sx={{
                    width: '70%',
                }}>

                    <Typography
                        sx={{
                            fontFamily: 'Architects Daughter, cursive'
                        }}

                        variant="h5" component="div">
                        {productTitle?.toUpperCase()}
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        mt: 1, alignItems: 'center'

                    }}>
                        <Typography
                            sx={{
                                ml: 5,
                                mr: 2,
                                fontWeight: 600,
                                fontFamily: 'Genos, sans-serif'
                            }}
                            align='left' variant="h6" display="inline" >
                            Brand:
                        </Typography>

                        <Typography sx={{
                        }}
                            align='left' variant="button" display="inline" >
                            {brand}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'

                    }}>
                        <Typography
                            sx={{
                                ml: 5,
                                mr: 2,
                                fontWeight: 600,
                                fontFamily: 'Genos, sans-serif',
                            }}
                            align='left' variant="h6" display="inline" >
                            Type:
                        </Typography>

                        <Typography sx={{

                        }}
                            align='left' variant="button" display="inline" >
                            {type}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Typography
                            sx={{
                                ml: 5,
                                mr: 2,
                                fontWeight: 600,
                                fontFamily: 'Genos, sans-serif'
                            }}
                            align='left' variant="h6" display="inline" >
                            Price:
                        </Typography>

                        <Typography sx={{
                        }}
                            align='left' variant="button" display="inline" >
                            BDT   {price}
                        </Typography>


                    </Box>



                </CardContent>
                <Box
                    sx={{
                        width: '30%',
                    }}>
                    <svg
                        style={{

                        }}
                        viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="85%" cy="55%" r="8" fill={color} />
                    </svg>
                </Box>
            </Box>
            <CardActions
                sx={{
                    height: 35,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: 'linear-gradient(to top right, #e3b3e8, #e8b3c4, #d5b3e8)'
                }}
            >
                <Link
                    style={{
                        textDecoration: 'none',
                    }}
                    to={`/ordersconfirmation/${_id}`}>
                    <Button
                        sx={{
                            backgroundColor: 'hotpink',
                            "&:hover": { backgroundColor: 'purple' }
                        }}
                        variant="contained" size="large">Order Now</Button>
                </Link>
            </CardActions>

        </Card >
    )
}

export default ProductCards
