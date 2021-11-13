import { Container } from '@mui/material'
import React from 'react'
import NewArrivalsCard from '../NewArrivalsCard/NewArrivalsCard'
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/material';

const NewArrivals = () => {



    const newArrivalsProducts = ['618bba3a70a0f4d5143df9fb', '618bba3a70a0f4d5143df9fa']




    return (

        <>

            <Box
                sx={{
                    width: '100%',
                    backgroundImage: 'linear-gradient(to top right, #e3b3e8, #e8b3c4, #d5b3e8)',
                    color: 'white',
                    py: 5,
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Passions Conflict, cursive', color: "purple",
                        fontSize: { xs: '3rem', md:'6rem' }

                    }}
                    variant='h1'>
                    Check out our exciting new arrivals!
                </Typography>
            </Box>

            <Container>

                <Grid
                    sx={{
                        mb: 5,
                    }}
                    container
                    spacing={2}

                >


                    {
                        newArrivalsProducts.map(itemID => <Grid
                            item xs={12} md={6}>
                            <NewArrivalsCard itemID={itemID} />

                        </Grid>
                        )
                    }

                </Grid>

            </Container>

        </>
    )
}

export default NewArrivals
