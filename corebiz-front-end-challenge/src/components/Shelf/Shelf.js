import React from 'react'
import axios from 'axios'
import styles from './Shelf.module.css'

import fullStarIcon from '../../static/icons/full_star.svg';
import emptyStarIcon from '../../static/icons/empty_star.svg';

import CartContext from '../../services/CartContext';

class Shelf extends React.Component {
    state = { 
        products: []
     }

    async componentDidMount() {
        axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
            .then(res => {
                let products = res.data;
                this.setState({products})
            })
    }

    starsRender(starsCount) {
        let starsList = []

        for(let i = 1;i <= 5; i++)
        {
            starsList.push(<img key={"star" + i} src={i <= starsCount ? fullStarIcon : emptyStarIcon} alt={"Star"}/>)
        }

        return starsList;
    }

    formatPrice(price)
    {
        let formattedPrice = price / 100;
        return formattedPrice.toFixed(2).toLocaleString("pt-BR");
    }

    render() { 
        return ( 
            <CartContext.Consumer>
                {({cart, addProductToCart}) => (
                    <div className={styles.shelf}>
                        <div className={styles.container}>
                            <h2>Mais Vendidos</h2>
                            <ul className={styles.products}>
                                { 
                                    this.state.products.map((element) => 
                                        <li key={element.productName} className={styles.product}>
                                            <img src={element.imageUrl} alt={element.productName} className={styles.productImage}/>
                                            {element.listPrice ? <div className={styles.productDiscountFlag}></div> : null }
                                            <div className={styles.productBody}>
                                                <p className={styles.productName}>{element.productName}</p>
                                                <div className={styles.stars}>
                                                    { this.starsRender(element.stars) }
                                                </div>
                                                <p className={styles.listedPrice}>{element.listPrice != null ? "de R$ " + this.formatPrice(element.listPrice) : null }</p>
                                                <p className={styles.price}>por R$ {this.formatPrice(element.price)}</p>
                                                <p className={styles.installments}>{element.installments.length > 0 ? "ou em " + element.installments[0].quantity + "x de R$ " + this.formatPrice(element.installments[0].value) : null }</p>
                                                <button className={styles.productButton} onClick={() => addProductToCart(element)}>Comprar</button>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div> 
                )}
            </CartContext.Consumer>
        );
    }
}
 
export default Shelf;