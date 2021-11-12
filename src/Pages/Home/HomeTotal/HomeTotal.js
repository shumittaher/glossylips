import { Box } from '@mui/system'
import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Banner from '../Banner/Banner'
import HomeProducts from '../HomeProducts/HomeProducts'
import ReviewShowTotal from '../ReviewShow/ReviewShowTotal/ReviewShowTotal'

const HomeTotal = () => {

    

    return (
        <Box>

            <Banner />
            <HomeProducts />
            <ReviewShowTotal />
            <Footer />

        </Box>
    )
}

export default HomeTotal
