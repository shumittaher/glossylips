import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import serverLocation from '../../../ServerLocation/serverlocation'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography,  } from '@mui/material/';
import { ListItemAvatar } from '@mui/material/';


const MakeAdmin = () => {


    const [userForAdmin, setUserForAdmin] = useState([])

    useEffect(() => {
        fetch(`${serverLocation}users`)
            .then(res => res.json())
            .then(result => {
                setUserForAdmin(result)
            })
    }, [])

    const handleAdminifyUser = (user) => {
        fetch(`${serverLocation}users/admin`, {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    const remainingUsers = userForAdmin.filter(ur => ur.email !== user.email)
                    const changedUser = userForAdmin.filter(cu => cu.email === user.email)
                    if (user.role === 'user') {
                        changedUser[0].role = 'admin'
                    } else { changedUser[0].role = 'user' }
                    const newUsers = [...changedUser, ...remainingUsers]

                    setUserForAdmin(newUsers)
                }
            })

    }


    return (
        <Box sx={{
            mt: 10,
            maxWidth: 'sm',
            mx: 'auto'
        }}>
            <Typography
                sx={{ mb: 2, fontWeight: 'bold' }}
                variant="h6" component="div">
                Change Role
            </Typography>


                <List>
                    {userForAdmin.map(user =>
                        <ListItem disablePadding >
                            <ListItemAvatar>
                                {(user.role).toUpperCase()}
                            </ListItemAvatar>

                            <ListItemButton onClick={() => handleAdminifyUser(user)}>
                                <ListItemText primary={user.displayName} secondary={user.email} />

                                <ListItemIcon>
                                    Toggle Role
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>)
                    }
                </List>

        </Box >
    )
}

export default MakeAdmin
