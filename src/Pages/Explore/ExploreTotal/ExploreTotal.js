import React from 'react'
import ProductCards from '../ProductCards/ProductCards'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import serverLocation from '../../../ServerLocation/serverlocation';

const ExploreTotal = () => {

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        fetch(`${serverLocation}products`)
            .then(res => res.json())
            .then(result => {
                setProducts(result)
            })
    }, [])

    return (

       
            <Container sx={{ mt: 15 }}>


                <Grid container spacing={2}>
                    {
                        products.map(product => <Grid item xs={12} sm={6} md={4}>
                            <ProductCards key={product._id} product={product} />
                        </Grid>
                        )
                    }
                </Grid>



            </Container>
    )
}

export default ExploreTotal
