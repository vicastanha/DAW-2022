import './style.css';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">
                <section id="banner">
                    <div className="banner-content">
                        <h1>Lugar exato para você realizar os seus sonhos</h1>

                        <h3>Nós oferecemos um serviço completo de venda, locação
                            e compra.</h3>
                    </div>
                    <div className="banner-filter">
                        <div className="filter-fields">

                            <form>
                                <select>
                                    <option value="venda">Venda</option>
                                    <option value="locacao">Locação</option>
                                </select>



                                <select>
                                    <option>Tipo Imóvel</option>
                                    <option value="apto">Apartamento</option>
                                    <option value="casa">Casa</option>
                                    <option value="sobrado">Sobrado</option>
                                    <option value="terreno">Terreno</option>
                                </select>



                                <select>
                                    <option>Cidade</option>
                                    <option value="coronel">Coronel Vivida</option>
                                    <option value="beltrao">Francisco Beltrão</option>
                                    <option value="pato">Pato Branco</option>
                                    <option value="saudade">Saudade do Iguaçu</option>
                                </select>



                                <select>
                                    <option>Bairro</option>
                                    <option value="brasilia">Brasília</option>
                                    <option value="centro">Centro</option>
                                    <option value="lasalle">La Salle</option>
                                    <option value="pinheiros">Pinheiros</option>
                                </select>
                            </form>
                        </div>
                        <div className="filter-result">
                            <p className="result-value">26</p>
                            <p className="result-label">Imóveis</p>
                            <button>Filtrar</button>
                        </div>
                    </div>

                </section>

                <section id="cards">
                    <h2>Imóveis disponíveis</h2>

                    <div className="cards-content">

                        <div className="card">
                            <img src="./assets/img/thumb1.png" alt="Casa 01" />

                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit.</h4>

                                <p>Perspiciatis aspernatur officiis iusto, distinctio eius eligendi
                                    sint debitis sunt, fugiat unde numquam quae. Nulla sequi dolorem
                                    sed eos suscipit aspernatur maxime!</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb2.png" alt="Casa 02" />

                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit.</h4>

                                <p>Perspiciatis aspernatur officiis iusto, distinctio eius eligendi
                                    sint debitis sunt, fugiat unde numquam quae. Nulla sequi dolorem
                                    sed eos suscipit aspernatur maxime!</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb3.png" alt="Casa 03" />

                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit.</h4>

                                <p>Perspiciatis aspernatur officiis iusto, distinctio eius eligendi
                                    sint debitis sunt, fugiat unde numquam quae. Nulla sequi dolorem
                                    sed eos suscipit aspernatur maxime!</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb4.png" alt="Casa 04" />

                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit.</h4>

                                <p>Perspiciatis aspernatur officiis iusto, distinctio eius eligendi
                                    sint debitis sunt, fugiat unde numquam quae. Nulla sequi dolorem
                                    sed eos suscipit aspernatur maxime!</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb5.png" alt="Casa 05" />

                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit.</h4>

                                <p>Perspiciatis aspernatur officiis iusto, distinctio eius eligendi
                                    sint debitis sunt, fugiat unde numquam quae. Nulla sequi dolorem
                                    sed eos suscipit aspernatur maxime!</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb6.png" alt="Casa 06" />

                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit.</h4>

                                <p>Perspiciatis aspernatur officiis iusto, distinctio eius eligendi
                                    sint debitis sunt, fugiat unde numquam quae. Nulla sequi dolorem
                                    sed eos suscipit aspernatur maxime!</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="reasons">
                    <h2>Por que nos Escolher?</h2>

                    <div className="reasons-content">

                        <div className="reason">
                            <p className="reason-value">+1000</p>
                            <p className="reason-label">Imóveis</p>
                        </div>

                        <div className="reason">
                            <p className="reason-value">+500</p>
                            <p className="reason-label">Clientes Felizes</p>
                        </div>

                        <div className="reason">
                            <p className="reason-value">+50</p>
                            <p className="reason-label">Premiações</p>
                        </div>

                        <div className="reason">
                            <p className="reason-value">+100</p>
                            <p className="reason-label">Especialistas</p>
                        </div>

                    </div>
                </section>

                <section id="specialists">
                    <h2>Converse com um Especialista</h2>
                    <div className="specialists-content">
                        <div className="specialist">
                            <h5>Tutu Williams</h5>
                            <p>London</p>
                            <p className="specialist-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perspiciatis, temporibus tempora, a, quae fugit voluptate possimus at omnis nesciunt totam
                                dolore! Sed odio ipsam cupiditate aliquam ad maiores animi sunt!</p>
                        </div>
                        <div className="specialist">
                            <h5>Mark Zion</h5>
                            <p>New York City</p>
                            <p className="specialist-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perspiciatis, temporibus tempora, a, quae fugit voluptate possimus at omnis nesciunt totam
                                dolore! Sed odio ipsam cupiditate aliquam ad maiores animi sunt!</p>
                        </div>
                        <div className="specialist">
                            <h5>Essien Crest</h5>
                            <p>Berlin</p>
                            <p className="specialist-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perspiciatis, temporibus tempora, a, quae fugit voluptate possimus at omnis nesciunt totam
                                dolore! Sed odio ipsam cupiditate aliquam ad maiores animi sunt!</p>
                        </div>
                    </div>

                </section>

                <section id="values">
                    <h2>Quem é a Imobiliária Unimater?</h2>

                    <div className="values-container">
                        <img src="./assets/img/place-company.png" alt="Foto da firma" />

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
            </div>
        </div>
    )
}