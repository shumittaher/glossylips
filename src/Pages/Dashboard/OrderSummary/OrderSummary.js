import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import serverLocation from '../../../ServerLocation/serverlocation'
import LittleCards from '../LittleCards/LittleCards'

const OrderSummary = ({ user }) => {

    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        axios.get(`${serverLocation}orders`, {
            params: {
                email: user.email
            }
        }).then(res => setMyOrders(res.data))
    }, [user.email])


    const handleCancelOrder = (myorder) => {
        const confirm = window.confirm("Are you sure?")

        if (confirm) {
            fetch(`${serverLocation}orders/${myorder._id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Success')
                        const remainingOrders = myOrders.filter((order) => order._id !== myorder._id)
                        setMyOrders(remainingOrders)
                    }
                })
        }
    }


    return (
        <Container>

            <Box sx={{
                mt: 10,
            }}>
                <Typography variant="h6" component="div"
                    sx={{
                        fontWeight: 'bold',
                        py: 1
                    }}>
                    My Orders
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexWrap:'wrap',
                    width: 400,
                    mx: 'auto',
                    mt: 2
                }}>
                    {
                        myOrders.map(myorder => <LittleCards key={myorder._id} handleCancelOrder={handleCancelOrder} myorder={myorder}></LittleCards>)
                    }
                </Box>

            </Box>
        </Container>

    )
}

export default OrderSummary
