import React, { useEffect, useState } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListItemAvatar, } from '@mui/material/';
import Avatar from '@mui/material/Avatar';
import serverLocation from '../../../ServerLocation/serverlocation';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


const OrderList = ({ order ,handleConfirmOrder, handleDeleteOrder}) => {

    const [productAtHand, setProductAtHand] = useState([])

    useEffect(() => {

        fetch(`${serverLocation}products/${order.productId}`)
            .then(res => res.json()).then(data => setProductAtHand(data))

    }, [order.productId])



    const details =
        <>
            {order.address}
            <br />
            {order.phone}
        </>

    return (

        <ListItem disablePadding secondaryAction={
            <IconButton
            onClick={() => handleDeleteOrder(order)}
            edge="end" aria-label="delete" >
                <DeleteIcon />
            </IconButton>

        } >
            <ListItemAvatar>
                <Avatar>
                    <img
                        style={{
                            height: "52px"
                        }}
                        src={productAtHand.imageLink} alt="" />
                </Avatar>
            </ListItemAvatar>

            <ListItemButton
                onClick={() => handleConfirmOrder(order)}
            >
                <ListItemText
                    primary={productAtHand.productTitle}
                    secondary={details}
                />

                <ListItemIcon>
                    Confirm
                </ListItemIcon>
            </ListItemButton>
        </ListItem >
    )
}

export default OrderList
