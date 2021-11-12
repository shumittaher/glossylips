import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system'


const Register = ({ handleTextFieldChange, handleRegister }) => {
    return (
        <Box>

            <Typography variant="h6" component="div"
                sx={{
                    fontWeight: 'bold',
                    py: 1
                }}>
                Register
            </Typography>
            
            <form onSubmit={handleRegister}>

                <TextField required type="name" onChange={handleTextFieldChange} name='displayName'
                    margin="normal" sx={{ width: '80%' }} label="Name" variant="filled" />

                <TextField required type="email" onChange={handleTextFieldChange} name='email'
                    margin="normal" sx={{ width: '80%' }} label="Email" variant="filled" />

                <TextField required type="password" onChange={handleTextFieldChange} name='password'
                    margin="normal" sx={{ width: '80%' }} label="Password" variant="filled" />
                <TextField required type="password" onChange={handleTextFieldChange} name='password2'
                    margin="normal" sx={{ width: '80%' }} label="Retype Password" variant="filled" />

                <Button variant="contained" type='submit'
                    sx={{
                        width: '80%',
                        mt: 3
                    }}>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                        }}>
                        Sign up
                    </Typography>
                </Button>
            </form>
        </Box>
    )
}

export default Register
