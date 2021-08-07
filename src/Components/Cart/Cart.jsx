import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import {Link } from  'react-router-dom'
import useStyle from './styles';
import CartItem from './CartItem/CartItem';
const Cart = ({cart , handelUpdateCartQty , handelRemoveFromCart , handelEmptyCart}) => {
    
    const classes = useStyle();
    const isEmpty = !cart.total_unique_items; 

    const Empty = ()=>(
        <Container>
        <Typography variant='subtitle1'>Your have no items in your shopping cart. 
        <Link to="/" className={classes.Link}>Start adding some</Link></Typography>
        </Container>
    )

    const FillCart = ()=>(
        <Container>
            <Grid container spacing={3}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem 
                         item={item}
                         handelUpdateCartQty={handelUpdateCartQty}
                         handelRemoveFromCart={handelRemoveFromCart}
                        />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>Subtotal : {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handelEmptyCart}>Empty cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </Container>
    )

    return (
       <Container>
           <div className={classes.toolbar} />
           <Container><Typography  variant='h3' gutterBottom>Your shopping cart</Typography></Container>
           {isEmpty ? <Empty/> : <FillCart/>}
        </Container>
       
    )
}

export default Cart
