import React from 'react'
import { Alert, Button, Container, Divider, Icon, Paper, Snackbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Login from './../Login/Login';
import Register from '../Register/Register';

import { useHistory, useLocation, useRouteMatch } from 'react-router';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const LoginTotal = () => {
    const location = useLocation()
    const history = useHistory()
    const [openWarning, setOpenWarning] = React.useState(false);

    const {  registerUser, logInUser, googleSignIn } = useAuth()

    const [loginData, setLoginData] = React.useState({})
    let { path, url } = useRouteMatch();


    const handleTextFieldChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

    const handleLogin = (e) => {

        logInUser(loginData.email, loginData.password, location, history)

        e.preventDefault()

    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, history)
    }

    const handleRegister = (e) => {

        if (loginData.password !== loginData.password2) {

            setOpenWarning(true);
            e.preventDefault()

            return
        }
        registerUser(loginData.email, loginData.password, loginData.displayName, history)

        e.preventDefault()
    }

    const handleClose = (event, reason) => {
        setOpenWarning(false);
    };


    return (
        <Container sx={{ mt: 15 }}>

            <Snackbar open={openWarning} autoHideDuration={3000} onClose={handleClose}>
                <Alert severity="warning">Passwords don't match!</Alert>
            </Snackbar>

            <Paper sx={{
                maxWidth: 'sm', mx: 'auto', height: 610
            }} elevation={3}>

                <Box sx={{
                    height: 470
                }}>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                    >
                        <Button >
                            <Link style={{
                                textDecoration: 'none',
                                display: 'block'
                            }}
                                to={`${url}`}>
                                Login
                            </Link>
                        </Button>

                        <Button >
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    display: 'block'
                                }}
                                to={`${url}/register`}>
                                Register
                            </Link>
                        </Button>

                    </Box>

                    <Switch>

                        <Route exact path={path}>
                            <Login handleTextFieldChange={handleTextFieldChange} handleLogin={handleLogin} />
                        </Route>
                        <Route path={`${path}/register`}>
                            <Register handleTextFieldChange={handleTextFieldChange} handleRegister={handleRegister} />
                        </Route>
                    </Switch>

                </Box>
                <Box>

                    <Divider
                        sx={{
                            width: '80%',
                            my: 3,
                            mx: 'auto'
                        }}>
                        <Typography variant="caption"
                            sx={{
                                color: 'gray'
                            }}>
                            Or Log In Using
                        </Typography>

                    </Divider>

                    <Box sx={{
                    }}>
                        <Button variant="contained" onClick={handleGoogleSignIn}
                            sx={{
                                backgroundColor: '#ea4335'
                            }}>
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    mr: 1
                                }}>
                                Google
                            </Typography>
                            <Icon baseClassName="fab" className="fa-google" />
                        </Button>
                    </Box>

                </Box>


            </Paper>
        </Container >
    )
}

export default LoginTotal
