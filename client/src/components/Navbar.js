import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import companyInformation from '../constants/companyInformation'
import menuItems from '../constants/menuItems'
import NavLink from './NavLink'
import {useSelector} from 'react-redux'


const drawerWidth = 240;

export default function Navbar(props) {
    const requests = useSelector(state => state.requests)
    return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <img src="/619.ico" alt="logo" style={{maxWidth: "40px"}}/>
            <Typography variant="h6" noWrap component="div" sx={{marginLeft: "10px"}}>
            {companyInformation.name}
            </Typography>
        </Toolbar>
        </AppBar>
        <Drawer
        variant="permanent"
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            <List>
            {menuItems.map((item, index) => {
                console.log(requests)
                const menuName = item.name + (item.name === "Inbox"? ` (${requests.length})` : "")
                return (<ListItem key={item.name} to={item.href} component={NavLink} disablePadding style={{textDecoration: "inherit", color:"inherit"}}>
                <ListItemButton>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={menuName} />
                </ListItemButton>

                </ListItem>
                )
            }
            )}
            </List>
            <Divider />
            {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
                </ListItem>
            ))}
            </List> */}
        </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
            {props.children}
        </Box>
    </Box>
    );
}