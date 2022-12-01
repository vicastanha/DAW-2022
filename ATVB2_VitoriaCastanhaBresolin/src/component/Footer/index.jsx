import './style.css';
import imgFb from '../../assets/img/facebook-icon.png';
import imgTw from '../../assets/img/twitter-icon.png';
import imgInsta from '../../assets/img/instagram-icon.png';


export function Footer() {
    return (

        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-icons">
                        <img src={imgFb} alt="facebook icone"/>
                            <img src={imgTw} alt="twitter icone"/>
                                <img src={imgInsta} alt="instagram icone"/>
                                </div>
                                <div className="footer-info">
                                    <ul>
                                        <li>Info</li>
                                        <li>Suporte</li>
                                        <li>Marketing</li>
                                    </ul>
                                </div>
                                <p className="footer-copyright">
                                    &#169; 2022 - Todos os direitos reservados.
                                </p>
                            </div>
                    </div>
                </footer>


                )
    }