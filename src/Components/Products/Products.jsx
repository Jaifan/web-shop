import React from 'react'
import { Grid } from "@material-ui/core";
import Product from './Product/Product';
import useStyles from './styles'
 




const Products = ({products , OnAddToCart}) => {
    const classes = useStyles();
    return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            { products.map((products)=>(
                <Grid  item key={products.id} item xs={12} sm={6} md={4} lg={3}>
                    <Product product= {products} OnAddToCart={OnAddToCart}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products
