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
import LogoDevIcon from '@mui/icons-material/LogoDev';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Appbar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box 
            sx={{ 
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
                {['Home', 'Education', 'About', 'Experience'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton component={Link} to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>
                            <ListItemIcon>
                                {text === 'Home' && <HomeIcon />}
                                {text === 'Education' && <SchoolIcon />}
                                {text === 'About' && <LogoDevIcon />}
                                {text === 'Experience' && <WorkHistoryIcon />}
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
                    backgroundPosition: 'center'
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
                        component={Link} 
                        to="/" 
                        sx={{ 
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: 'inherit'
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
