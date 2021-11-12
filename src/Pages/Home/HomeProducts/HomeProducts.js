import { Container, Grid } from '@mui/material'
import React from 'react'
import serverLocation from '../../../ServerLocation/serverlocation'
import ProductCards from '../../Explore/ProductCards/ProductCards'

const HomeProducts = () => {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        fetch(`${serverLocation}products?limit=6`)
            .then(res => res.json())
            .then(result => {
                setProducts(result)
            })
    }, [])

    return (
        <Container sx={{
            mt: 5
        }}>

            <Grid container spacing={2}>
                {
                    products.map(product => <Grid item xs={12} sm={6} md={4}>
                        <ProductCards key={product._id} product={product} />
                    </Grid>)
                }
            </Grid>



        </Container>
    )
}

export default HomeProducts
