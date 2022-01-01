import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import BorderAllTwoToneIcon from '@mui/icons-material/BorderAllTwoTone';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import Typography from '@mui/material/Typography';
import ReviewsTwoToneIcon from '@mui/icons-material/ReviewsTwoTone';
import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone';
import StoreMallDirectoryTwoToneIcon from '@mui/icons-material/StoreMallDirectoryTwoTone';
import {
    Route,
    useMatch,
    NavLink,
    Link,
    useNavigate,
    Routes
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageUsers from '../ManageUsers/ManageUsers';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from './../../SignIn/AdminRoute/AdminRoute';
import Button from '@restart/ui/esm/Button';
import { FaSprayCan } from 'react-icons/fa';
import LocalAtmTwoToneIcon from '@mui/icons-material/LocalAtmTwoTone';

const drawerWidth = 248;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useMatch();
    const { admin, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const navigate = useNavigate();

    const handlelogout = () => {
        logout(navigate)
    }

    const drawer = (
        <div>
            <Toolbar><Link style={{ color: '#020202', listStyle: 'none', textDecoration: 'none', fontWeight: '700', fontSize: '16px', }} to='/' className='navbar-logo'>
                <p style={{ color: '#020202', textDecoration: 'none', fontWeight: '700', fontSize: '16px', }}><FaSprayCan style={{ marginRight: '10px' }} /> Hero Rider.</p>
            </Link></Toolbar>
            <Divider />
            <List>
                <NavLink style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }} to={url} ><ListItem button >
                    <ListItemIcon>
                        <DashboardTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem></NavLink>

                {admin &&
                    <NavLink style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }} to={`${url}/manage-user`}><ListItem button >
                        <ListItemIcon>
                            <AdminPanelSettingsTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manage user" />
                    </ListItem>
                    </NavLink>}
            </List >
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to={`/home`}>
                        <Button style={{ color: 'white', textDecoration: 'none', fontWeight: 'normal', background: '#323232', outline: 'none', borderRadius: '6px', padding: '7px 20px', border: 'none' }} >
                            Back to Home
                        </Button>
                    </Link>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Link onClick={handlelogout} >
                        <Button style={{ color: 'white', textDecoration: 'none', fontWeight: 'normal', background: '#323232', outline: 'none', borderRadius: '6px', padding: '7px 20px', border: 'none' }}>
                            Logout
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
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

                <Routes>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/manage-user`}>
                        <ManageUsers></ManageUsers>
                    </AdminRoute>
                </Routes>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
