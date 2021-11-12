import { Container, TextField, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import serverLocation from '../../ServerLocation/serverlocation'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import useAuth from './../../hooks/useAuth';
import axios from 'axios';


const OrdersConfirmation = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [order, setOrder] = useState({})
    const { user } = useAuth()


    useEffect(() => {

        fetch(`${serverLocation}products/${productId}`)
            .then(res => res.json()).then(data => setProduct(data))

    }, [productId])

    const handleOrderDetailsChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newOrder = { ...order }
        newOrder[field] = value
        setOrder(newOrder)
        console.log(order)
    }

    const handleAddOrder = (e) => {

        const finalOrder = {
            ...order,
            email: user.email,
            productId,
            status: 'pending'
        }

        axios.post(`${serverLocation}orders`, finalOrder)
            .then(res => console.log(res))
            .then(e.reset())

        e.preventDefault()
    }

    return (
        <Container
            sx={{
                mt: 15,
                display: 'flex',
                justifyContent: 'center'
            }}
        >

            <Card sx={{
                width: 400, height: 500, my: 2,
            }} elevation={3} >

                <CardMedia
                    component="img"
                    height="250"
                    image={product.imageLink}
                    alt="green iguana"
                />

                <CardContent sx={{
                    height: 160, p: 2
                }}>

                    <Typography gutterBottom variant="h5" component="div">
                        {product.productTitle?.toUpperCase()}
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
                            {product.brand}
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
                            {product.type}
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
                            BDT   {product.price}
                        </Typography>
                    </Box>


                </CardContent>


            </Card>
            <Paper sx={{
                width: 400, height: 500, my: 2,
            }} elevation={3}>

                <Typography variant="h6" component="div"
                    sx={{
                        fontWeight: 'bold',
                        pt: 3
                    }}>
                    Add new Products
                </Typography>

                <form onSubmit={handleAddOrder}>
                    <TextField
                        disabled
                        defaultValue={user.displayName}
                        margin="normal"
                        sx={{ width: '80%' }}
                        label="Your Name"
                        name='displayName'
                        variant="standard" />

                    <TextField
                        disabled
                        defaultValue={user.email}
                        margin="normal"
                        sx={{ width: '80%' }}
                        label="Your Email"
                        name='email'
                        variant="standard" />
                    <TextField
                        required
                        multiline
                        rows={4}
                        onChange={handleOrderDetailsChange}
                        margin="normal"
                        sx={{ width: '80%' }}
                        label="Your Shipping Address"
                        name='address'
                        type='address'
                        variant="standard" />
                    <TextField
                        required
                        onChange={handleOrderDetailsChange}
                        margin="normal"
                        sx={{ width: '80%' }}
                        label="Your Phone Number"
                        name='phone'
                        type='phone'
                        variant="standard" />



                    <Button variant="contained" type='submit'
                        sx={{
                            width: '80%',
                            my: 2,
                        }}>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                            }}>
                            Add Order
                        </Typography>
                    </Button>
                </form>

            </Paper>

        </Container>
    )
}

export default OrdersConfirmation
