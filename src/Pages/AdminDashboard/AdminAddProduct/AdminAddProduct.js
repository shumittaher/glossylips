import { Button, Container, TextField, Typography, Paper } from '@mui/material'
import React from 'react'
import serverLocation from '../../../ServerLocation/serverlocation'

const Admin = () => {

    const [product, setProduct] = React.useState({})

    const handleProductDetailsChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newProduct = { ...product }
        newProduct[field] = value
        setProduct(newProduct)
    }

    const handleAddProduct = (e) => {

        fetch(`${serverLocation}product`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(e.reset())

        e.preventDefault()
    }

    return (
        <Container
            sx={{
                my: 5,
            }}
        >

            <Paper sx={{
                maxWidth: 'sm', mx: 'auto',
            }} elevation={3}>

                <Typography variant="h6" component="div"
                    sx={{
                        fontWeight: 'bold',
                        pt: 3
                    }}>
                    Add new Products
                </Typography>

                <form onSubmit={handleAddProduct}>
                    <TextField
                        required
                        onChange={handleProductDetailsChange}
                        margin="normal"
                        sx={{ width: '80%' }}
                        label="Product Title"
                        name='productTitle'
                        variant="standard" />
                    <TextField
                        required
                        onChange={handleProductDetailsChange}
                        margin="normal"
                        sx={{ width: '80%' }}
                        label="Color Hex Code"
                        name='color'
                        variant="standard" />
                    <TextField
                        required
                        onChange={handleProductDetailsChange}
                        margin="normal"
                        sx={{ width: '80%' }}
                        label="Brand"
                        name='brand'
                        variant="standard" />
                    <TextField
                        required
                        onChange={handleProductDetailsChange}
                        margin="normal"
                        sx={{ width: '80%' }}
                        label="Type"
                        name='type'
                        variant="standard" />
                    <TextField
                        required
                        onChange={handleProductDetailsChange}
                        margin="normal"
                        sx={{ width: '80%' }}
                        label="Link of Image"
                        name='imageLink'
                        variant="standard" />
                    <TextField
                        required
                        onChange={handleProductDetailsChange}
                        margin="normal"
                        sx={{ width: '80%' }}
                        label="Price"
                        name='price'
                        variant="standard" />


                    <Button variant="contained" type='submit'
                        sx={{
                            width: '80%',
                            my: 3
                        }}>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                            }}>
                            Add Product
                        </Typography>
                    </Button>
                </form>

            </Paper>

        </Container>
    )
}

export default Admin
