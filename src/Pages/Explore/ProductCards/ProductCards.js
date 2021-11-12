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

    const { productTitle, brand, type, price,  imageLink , _id} = product


    return (

      
            <Card sx={{
                maxWidth: 400, mx: 'auto', height: 500, my: 2,
            }} elevation={3} >

                <CardMedia
                    component="img"
                    height="280"
                    image={imageLink}
                    alt="green iguana"
                />

                <CardContent sx={{
                    height: 130, p: 2
                }}>

                    <Typography gutterBottom variant="h5" component="div">
                        {productTitle?.toUpperCase()}
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        mt: 2
                    }}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                width: 120
                            }}
                            align='left' variant="button" display="inline" gutterBottom>
                            Brand:
                        </Typography>

                        <Typography sx={{
                        }}
                            align='left' variant="button" display="inline" gutterBottom>
                            {brand}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',

                    }}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                width: 120
                            }}
                            align='left' variant="button" display="inline" gutterBottom>
                            Type:
                        </Typography>

                        <Typography sx={{
                        }}
                            align='left' variant="button" display="inline" gutterBottom>
                            {type}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',

                    }}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                width: 120
                            }}
                            align='left' variant="button" display="inline" gutterBottom>
                            Price:
                        </Typography>

                        <Typography sx={{
                        }}
                            align='left' variant="button" display="inline" gutterBottom>
                            BDT   {price}
                        </Typography>
                    </Box>


                </CardContent>

                <CardActions
                    sx={{
                        p: 2
                    }}>
                    <Link style={{
                        textDecoration: 'none',
                    }} to={`/ordersconfirmation/${_id}`}>
                        <Button size="small">Order Now</Button>
                    </Link>
                </CardActions>

            </Card>
    )
}

export default ProductCards
