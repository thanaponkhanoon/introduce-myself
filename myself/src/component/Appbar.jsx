import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PlayForWorkIcon from '@mui/icons-material/PlayForWork';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink } from 'react-router-dom';

function Appbar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const wh = { color: 'white' };

    const DrawerList = (
        <Box 
            sx={{ 
                color: 'white',
                width: 250, 
                height: '100%', 
                backgroundImage: 'url(https://wallpapercave.com/wp/wp5006064.jpg)', 
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} 
            role="presentation" 
            onClick={toggleDrawer(false)}
        >
            <List>
                {['Home', 'Education', 'About', 'Experience', 'Project', 'Personal'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton 
                            component={NavLink} 
                            to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                            sx={({ isActive }) => ({
                                backgroundColor: isActive ? 'rgba(113, 48, 214, 0.2)' : 'transparent',
                                '&:hover': {
                                    backgroundColor: 'rgba(113, 48, 214, 0.3)'
                                },
                                color: 'white'
                            })}
                        >
                            <ListItemIcon>
                                {text === 'Home' && <HomeIcon style={wh}/>}
                                {text === 'Education' && <SchoolIcon style={wh}/>}
                                {text === 'About' && <DisplaySettingsIcon style={wh}/>}
                                {text === 'Experience' && <WorkHistoryIcon style={wh}/>}
                                {text === 'Project' && <PlayForWorkIcon style={wh}/>}
                                {text === 'Personal' && <PermIdentityIcon style={wh}/>}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <AppBar 
                position="fixed"
                sx={{ 
                    backgroundImage: 'url(https://i.pinimg.com/736x/57/28/6d/57286df05d3470fd18ef883df200ca67.jpg)', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '@media (max-width: 600px)': {
                        height: 'auto'
                    }
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography 
                        variant="h6" 
                        component={NavLink} 
                        to="/" 
                        sx={{ 
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: 'inherit',
                            '@media (max-width: 600px)': {
                                fontSize: '1rem'
                            }
                        }}
                    >
                        My Website
                    </Typography>
                    <a
                        href="https://github.com/thanaponkhanoon/introduce-myself"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Typography variant="body1" sx={{ mr: 1 }}>
                            My GitHub
                        </Typography>
                        <IconButton size="large" color="inherit">
                            <GitHubIcon />
                        </IconButton>
                    </a>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default Appbar;
