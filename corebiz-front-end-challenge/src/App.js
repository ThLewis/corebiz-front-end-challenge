import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Shelf from './components/Shelf/Shelf';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

import CartContext from './services/CartContext'

class App extends React.Component {
    state = { 
      cart: [],
      addProductToCart: (newProduct) => {
        let updatedCart = [...this.state.cart, newProduct] 

        console.log([...this.state.cart, newProduct] )
        this.setState({
          cart: updatedCart
        })

        window.localStorage.setItem('cartItems', JSON.stringify(updatedCart))
      }
    }

    componentDidMount() {
      let cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
      
      if(cartItems != null)
      {
        this.setState({
          cart: [...cartItems]
        })
      }
    }

    render() { 
      return ( 
        <CartContext.Provider value={this.state}>
          <div>
            <Header />
            <Banner />
            <Shelf />
            <Newsletter />
            <Footer />
          </div>
        </CartContext.Provider>
      );
  }
}
 
export default App;