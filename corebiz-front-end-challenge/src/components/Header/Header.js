import React from 'react'
import styles from './Header.module.css'

import CorebizLogo from '../../static/img/logo-corebiz-preto-cinza.png'
import MagnifierIcon from '../../static/icons/magnifier.svg'
import AccountIcon from '../../static/icons/account.svg'
import CartIcon from '../../static/icons/cart.svg'

import CartContext from '../../services/CartContext'

const Header = () => {
    return (
        <CartContext.Consumer>
            {({cart}) => 
                (
                    <header className={styles.header}>
                        <div className={styles.container}>
                            <img src={CorebizLogo} alt="Corebiz Logo" className={styles.logo}/>
                            <form className={styles.form}>
                                <input 
                                    className={styles.searchbox} 
                                    type="text" name="searchbox" 
                                    id="searchbox" 
                                    placeholder="O que está procurando?"
                                />
                                <button className={styles.button}>
                                    <img src={MagnifierIcon} alt="Busca"/>
                                </button>
                            </form>
                            <button className={styles.account}>
                                <img src={AccountIcon} alt="Minha Conta"/> Minha Conta
                            </button>
                            <button className={styles.cart}>
                                <img src={CartIcon} alt="Carrinho"/>
                                {cart.length > 0 ? <span>{cart.length}</span> : null}
                            </button>
                        </div>
                    </header>
                )
            }
        </CartContext.Consumer>
    )
}

export default Header;