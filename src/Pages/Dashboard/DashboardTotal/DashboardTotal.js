import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Button, Icon, } from '@mui/material';
import {
    Switch,
    Link,
    useRouteMatch,
    Route
} from "react-router-dom";
import Header from '../../Shared/Header/Header';
import useAuth from '../../../hooks/useAuth';
import OrderSummary from '../OrderSummary/OrderSummary';
import ReviewProduct from '../ReviewProduct/ReviewProduct';

const drawerWidth = 240;


const DashboardTotal = (props) => {

    const { logOut, user } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawerLinkStyle = {
        textDecoration: 'none',
        display: 'block'
    }

    const drawer = (
        <Box>
            <Box sx={{ height: 75 }} />

            <Divider />

            <Link
                style={drawerLinkStyle}
                to={`${url}`}>
                <Button fullWidth color="inherit">My Orders </Button>
            </Link>

            <Link
                style={drawerLinkStyle}
                to={`${url}/review`}>
                <Button fullWidth color="inherit">Review Product</Button>
            </Link>

            <Button onClick={logOut} fullWidth color="inherit">log out
                <Icon sx={{ mx: 1 }} baseClassName="fas" className="fa-sign-out-alt" />
            </Button>


        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <Box sx={{ display: 'flex' }}>
            <Header>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{
                        position: 'absolute',
                        left: 25,
                        top: 15,
                        display: { sm: 'none' }
                    }}
                >
                    <MenuIcon />
                </IconButton>

             


            </Header>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"

            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box

                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>

                    <Route exact path={path}>
                        <OrderSummary user={user} />
                    </Route>

                    <Route path={`${path}/review`}>
                        <ReviewProduct user={user} />
                    </Route>

                </Switch>



            </Box>
        </Box>
    )
}

export default DashboardTotal
