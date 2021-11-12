import { Box } from '@mui/system'
import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Banner from '../Banner/Banner'
import HomeProducts from '../HomeProducts/HomeProducts'
import NewArrivals from '../NewArrivals/NewArrivals'
import ReviewShowTotal from '../ReviewShow/ReviewShowTotal/ReviewShowTotal'

const HomeTotal = () => {



    return (
        <Box>

            <Banner />
            <HomeProducts />
            <ReviewShowTotal />
            <NewArrivals />
            <Footer />

        </Box>
    )
}

export default HomeTotal
