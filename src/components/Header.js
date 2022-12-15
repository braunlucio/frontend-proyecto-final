import React from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'
import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState ();

  return (
    <div>
        <AppBar position='sticky'>
            <Toolbar>
            <Typography>
             <LibraryBooksOutlinedIcon />
            </Typography>
            <Tabs 
            value={value} 
            onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={NavLink} to="/add" label='Añadir libro' />
                <Tab LinkComponent={NavLink} to="/about" label='Sobre nosotros' />
                <Tab LinkComponent={NavLink} to="/books" label='Libros' />
            </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header