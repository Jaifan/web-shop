import React from 'react'
import { AppBar , Toolbar , IconButton , Badge , MenuItem , Menu , Typography } from '@material-ui/core'
import {Link , useLocation} from 'react-router-dom'
import { LocationCity, ShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

const Navbar = ({totalItem}) => {
    const classes = useStyles();
    const loaction = useLocation();
    return (
        <>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography  className={classes.bar_left}>
                    <h3>WEB SHOP</h3>
                </Typography>

                <div className={classes.grow}/>

                {loaction.pathname === '/' && (
                <div>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItem} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div> )}
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar
