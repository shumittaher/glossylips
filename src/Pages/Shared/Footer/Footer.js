import { Icon, Typography, Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
    return (

        <Box id="about"
            sx={{
                py: 10,
                backgroundImage: 'linear-gradient(to top right, #e3b3e8, #e8b3c4, #d5b3e8)',
                color: 'white',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontWeight: 'bold'
                    }}
                >
                    <Typography variant='h3'>ABOUT US</Typography>

                    {/* <img src={logo} alt="" /> */}

                    <Box
                        sx={{
                            display: 'flex',
                            fontWeight: 'bold',
                            justifyContent: 'center'
                        }}
                    >
                        <Icon
                            sx={{ fontSize: '4em' }}
                            baseClassName="fab" className="fa-facebook-square" />
                        <Icon
                            sx={{ fontSize: '4em' }}
                            baseClassName="fab" className="fa-instagram-square" />
                        <Icon sx={{ fontSize: '4em' }}
                            baseClassName="fab" className="fa-pinterest-square" />
                        <Icon sx={{ fontSize: '4em' }}
                            baseClassName="fab" className="fa-twitter-square" />
                    </Box>
                    <Typography
                    >
                        Business Number: <span className="text-white"> + 88 0183464849 </span><br />
                        3131 Gulshan Ave. Dhaka, Bangladesh <br />
                        Complaints/Enquiries: (Email) glossy@lips.com
                    </Typography>

                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        fontWeight: 'bold',
                        justifyContent: 'space-evenly'
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            fontWeight: 'bold',
                            textAlign: 'left'
                        }}>
                        <Typography >OTHER</Typography>
                        <Typography >Bags</Typography>
                        <Typography >Eye</Typography>
                        <Typography >Skin Care</Typography>
                        <Typography >Shoes</Typography>
                        <Typography >Accessories</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        <Typography >SUPPORT</Typography>
                        <Typography >Account</Typography>
                        <Typography >Legal</Typography>
                        <Typography >Contact</Typography>
                        <Typography >Affiliate Program</Typography>
                        <Typography >Privacy Policy</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        <Typography >USEFUL PAGES</Typography>
                        <Typography >Deals</Typography>
                        <Typography >FAQs</Typography>
                        <Typography >Why Choose Us</Typography>

                    </Box>
                </Box>

            </Container>


        </Box>
    )
}

export default Footer
