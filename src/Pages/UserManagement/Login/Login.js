import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

import React from 'react'

const Login = ({ handleTextFieldChange, handleLogin }) => {
    return (


        <Box>

            <Typography variant="h6" component="div"
                sx={{
                    fontWeight: 'bold',
                    py: 1
                }}>
                LOGIN
            </Typography>

            <form onSubmit={handleLogin}>
                <TextField
                    required
                    type="email"
                    onChange={handleTextFieldChange}
                    name='email'
                    margin="normal"
                    sx={{ width: '80%' }}
                    label="Email"
                    variant="filled" />

                <TextField
                    required
                    type="password"
                    onChange={handleTextFieldChange} name='password'
                    margin="normal"
                    sx={{ width: '80%' }}
                    label="Password"
                    variant="filled" />

                <Button variant="contained" type='submit'
                    sx={{
                        width: '80%',
                        my: 3
                    }}>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                        }}>
                        LOGIN
                    </Typography>
                </Button>
            </form>

        </Box>

    )
}

export default Login
