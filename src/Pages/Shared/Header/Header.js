import { AppBar, Button, Container, Icon, Typography } from '@mui/material'
import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import logo from '../../../images/designpics/logo.png'
import { HashLink } from 'react-router-hash-link';


const Header = (props) => {

    const { user, logOut, admin } = useAuth()
    const linkStyle = {
        textDecoration: 'none',
        padding: '12px'
    }
    const linkTextStyle = {
        fontFamily: 'Genos, sans-serif',
        fontSize: '1.5rem'
    }

    return (
        <AppBar
            sx={{
                backgroundColor: 'white'
            }}
        >
            <Box
                component="nav"

                sx={{
                    height: 75,
                    backgroundImage: 'linear-gradient(to top right, #e3b3e8, #e8b3c4, #d5b3e8)',
                    display: 'flex',
                    justifyContent: { xs: 'right', md: 'center' },
                }}
            >
                {props.children}

                <Box
                    sx={{
                        position: { xs: 'static', md: 'absolute' },
                        left: 25,
                        height: { xs: 75, md: 130 },
                    }}
                >
                    <img
                        style={{
                            height: '100%',

                            objectFit: 'cover'
                        }}
                        src={logo} alt="" />
                </Box>


                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <Link style={linkStyle} to='/home'>
                        <Typography display="block" sx={linkTextStyle}>Home</Typography>
                    </Link>
                    <Link style={linkStyle} to='/explore'>
                        <Typography display="block" sx={linkTextStyle}>Explore</Typography>
                    </Link>
                    <HashLink style={linkStyle} to='/home#about'>
                        <Typography display="block" sx={linkTextStyle}>About</Typography>
                    </HashLink>

                </Box>
            </Box>

            <Container>

                <Box
                    component="nav"


                    sx={{
                        display: 'flex',
                        justifyContent: 'right',
                        alignItems: 'center',
                        borderBottom: 2,
                        height: 30,
                        backgroundColor: 'white'
                    }}>

                    {!user.displayName &&
                        <Link style={linkStyle} to='/login'>
                            <Typography sx={linkTextStyle}>Login</Typography>
                        </Link>
                    }
                    {user.displayName &&
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Typography variant='caption' display="block" sx={{ color: 'gray' }}>Logged In as: {user.displayName}</Typography>

                            {admin && <Link style={linkStyle} to='/admin'>
                                <Typography display="block" sx={linkTextStyle}>Admin Page</Typography>
                            </Link>}

                            {!admin && <Link style={linkStyle} to='/dashboard'>
                                <Typography display="block" sx={linkTextStyle}>My Dashboard</Typography>
                            </Link>}

                            <Button onClick={logOut}>
                                <Icon baseClassName="fas" className="fa-sign-out-alt" />
                            </Button>

                        </Box>

                    }


                </Box>
            </Container>


        </AppBar >
    )
}

export default Header
