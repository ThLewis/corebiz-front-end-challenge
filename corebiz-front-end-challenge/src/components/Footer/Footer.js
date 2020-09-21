import React from 'react';
import styles from './Footer.module.css';

import EmailIcon from '../../static/icons/email.svg';
import SupportIcon from '../../static/icons/support.svg';
import CorebizLogo from '../../static/icons/corebiz_logo_gray.svg';
import VtexLogo from '../../static/icons/vtex_logo.svg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.location}>
                    <h3>Localização</h3>
                    <p>
                        Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
                        Alphavile SP <br />
                        brasil@corebiz.ag <br />
                        +55 11 3090 1039
                    </p>
                </div>
                <div className={styles.contact}>
                    <a href="/#">
                        <img src={EmailIcon} alt="Contato"/><span>ENTRE EM CONTATO</span> 
                    </a>
                    <a href="/#">
                        <img src={SupportIcon} alt="Suporte"/><span>FALE COM O NOSSO CONSULTOR ONLINE</span>
                    </a>
                </div>
                <div className={styles.icons}>
                    <a href="https://www.corebiz.ag">
                        <p>Created at</p>
                        <img src={CorebizLogo} alt="Corebiz"/>
                    </a>
                    <a href="https://www.corebiz.ag">
                        <p>Powered by</p>
                        <img src={VtexLogo} alt="Vtex"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;