import { Icon, Typography, Container, Divider } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import logo from '../../../images/designpics/logo.png'

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
                    flexDirection: { xs: 'column', md: 'row' },

                    justifyContent: 'space-around'
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontWeight: 'bold',
                    }}
                >
                    <Typography
                        sx={{
                            color: 'purple'
                        }}

                        variant='h3'>ABOUT US</Typography>

                    <img
                        style={{
                            height: 100,
                            width: "100%",
                            objectFit: 'cover'
                        }}
                        src={logo} alt="" />

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
                        Business Number:
                        <span style={{
                            color: 'purple',
                            fontWeight: 'bold'
                        }}
                        > + 88 0183464849 </span><br />
                        3131 Gulshan Ave. Dhaka, Bangladesh <br />
                        Complaints/Enquiries: (Email) <span style={{
                            color: 'purple',
                            fontWeight: 'bold'
                        }}>
                            glossy@lips.com
                        </span>
                    </Typography>
                    <br />
                    <Divider />
                    <br />
                </Box>
                <Box
                  
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        justifyContent: 'space-evenly'
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left',
                        }}>
                        <Typography   sx={{
                        fontFamily: 'Genos, sans-serif',
                        fontSize: '1.5rem',
                    }}
                     gutterBottom>OTHER</Typography>
                        <Typography >Bags</Typography>
                        <Typography >Eye</Typography>
                        <Typography >Skin Care</Typography>
                        <Typography >Shoes</Typography>
                        <Typography >Accessories</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left'
                    }}>
                        <Typography sx={{
                        fontFamily: 'Genos, sans-serif',
                        fontSize: '1.5rem', }} gutterBottom>SUPPORT</Typography>
                        <Typography >Account</Typography>
                        <Typography >Legal</Typography>
                        <Typography >Contact</Typography>
                        <Typography >Affiliate Program</Typography>
                        <Typography >Privacy Policy</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left'
                    }}>
                        <Typography sx={{
                        fontFamily: 'Genos, sans-serif',
                        fontSize: '1.5rem', }} gutterBottom>USEFUL PAGES</Typography>
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
