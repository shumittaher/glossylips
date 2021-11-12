import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import serverLocation from '../../../ServerLocation/serverlocation'
import List from '@mui/material/List';

import { Typography } from '@mui/material/';
import OrderList from '../OrderList/OrderList';


const OrderManagement = () => {


    const [ordersForAdmin, setOrdersForAdmin] = useState([])

    useEffect(() => {
        fetch(`${serverLocation}orders/admin`)
            .then(res => res.json())
            .then(result => {
                setOrdersForAdmin(result)
            })
    }, [])


    const handleDeleteOrder = (orderItem) => {
        const confirm = window.confirm("Are you sure?")

        if (confirm) {
            fetch(`${serverLocation}orders/${orderItem._id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Success')
                        const remainingOrders = ordersForAdmin.filter((or) => or._id !== orderItem._id)
                        setOrdersForAdmin(remainingOrders)
                    }
                })
        }
    }

    const handleConfirmOrder = (orderItem) => {
        const confirm = window.confirm("Are you sure?")

        if (confirm) {
            fetch(`${serverLocation}orders/${orderItem._id}`, {
                method: 'PUT'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Success')
                        const remainingOrders = ordersForAdmin.filter((or) => or._id !== orderItem._id)
                        setOrdersForAdmin(remainingOrders)
                    }
                })
        }
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
                Manage Orders
            </Typography>
            <Typography
                sx={{ mb: 2, fontWeight: 'bold' }}
                variant="h6" component="div">
                Number of Total Orders:                {ordersForAdmin.length}
            </Typography>


            <List>
                {
                    ordersForAdmin.map(order => <OrderList order={order} handleDeleteOrder={handleDeleteOrder} handleConfirmOrder={handleConfirmOrder} key={order._id} />)
                }
            </List>


        </Box>
    )
}

export default OrderManagement
