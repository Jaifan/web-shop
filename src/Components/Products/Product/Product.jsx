 import React from 'react';
 import {Card , CardContent , CardMedia ,CardActions , Typography , IconButton} from '@material-ui/core';
 import {  AddShoppingCart} from '@material-ui/icons';
 import useStyles from "./styles";

 const Product = ( {product, OnAddToCart} ) => {

    const classes = useStyles();

    return (
         <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
             <CardContent>
                 <div className={classes.cardContent}>
                    <Typography  className={classes.name} gutterBottom>
                        {product.name}
                    </Typography>
                 </div>
             </CardContent>
             <CardActions disableSpacing className={classes.cardActions}>
                <Typography className={classes.price}>
                        {product.price.formatted_with_symbol}
                </Typography>
                <div></div>
                <IconButton aria-label="Add to Cart" onClick={()=> OnAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
             </CardActions>
         </Card>
     )
 }
 
 export default Product
 