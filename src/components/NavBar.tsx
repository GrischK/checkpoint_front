import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom";


export default function NavBar() {
    const navItems = ['Continents', 'Countries'];

    return (
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{mr: 2, display: {sm: 'none'}}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                >
                    MUI
                </Typography>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    {navItems.map((item: any) => (
                        <NavLink to={item}>
                            <Button key={item} sx={{color: '#fff'}}>
                                {item}
                            </Button>
                        </NavLink>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>

    );
}