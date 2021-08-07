import './App.css';
import {React , useState , useEffect} from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Products from './Components/Products/Products'
import Navbar from './Components/Navbar/Navbar'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/CheckoutForm/Checkout/Checkout'
import Footer from './Components/Footer/Footer'
import {commerce} from './lib/commerce'



function App() {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fatchProduct = async () => {
    const { data } = await commerce.products.list();

    setproducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handelUpdateCartQty = async (productId , quantity)=>{
      const { cart } = await commerce.cart.update(productId ,{quantity});

      setCart(cart)
  }

  const handelRemoveFromCart = async(productId)=> {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart)
  }

  const handelEmptyCart = async()=>{
    const {cart} = await commerce.cart.empty();

    setCart(cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };


  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);


      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);

    }
  }

  useEffect(() => {

    fatchProduct();
    fetchCart();

  }, []);



  return (
    <Router>
      <div className="body">
        <Navbar totalItem={cart.total_items}/>
        <Switch>

          <Route exact path="/">
            <Products products={products} OnAddToCart={handleAddToCart} />
          </Route>  

          <Route exact path="/cart">

            <Cart 
             cart={cart}
             handelUpdateCartQty={handelUpdateCartQty}
             handelRemoveFromCart={handelRemoveFromCart}
             handelEmptyCart ={ handelEmptyCart}
             />

          </Route>

          <Route exact path="/checkout">
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} refreshCart={refreshCart} />
          </Route>

        </Switch>

        <Footer/>

      </div>
    </Router>

  );
}

export default App;
