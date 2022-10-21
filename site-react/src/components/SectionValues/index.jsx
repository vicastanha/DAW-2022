import './style.css';

import imgLogo from '../../assets/img/place-company.png';

export function SectionValues(){
    return(
        <section id="values">
                    <h2>Quem é a Imobiliária Unimater?</h2>

                    <div className="values-container">
                        <img src={imgLogo} alt="Foto da firma" />

                        <div className="values-content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, doloremque reiciendis
                                facere maiores praesentium sapiente aliquid ad repellendus unde. Incidunt numquam recusandae
                                quos, molestias impedit error molestiae nobis quasi animi?</p>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo quasi temporibus aspernatur
                                repellat non, esse nesciunt minima quisquam, praesentium animi delectus debitis
                                necessitatibus labore corporis minus aut! In, consectetur!</p>
                            <div className="values-detail">
                                <div className="value">
                                    <span>Alto Padrão</span>
                                    <span>Agilidade</span>
                                </div>

                                <div className="value">
                                    <span>Facilidade</span>
                                    <span>Confiabilidade</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}