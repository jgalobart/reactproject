import './item.scss'

export default function Item (props) { 

        const item = 
                <div className="item">
                    <div className="productimg">
                        <img src={props.img} />
                        <p><a href="">Añadir a favoritos</a></p>
                    </div>
                    <div className="description">
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                        <p className="itemId">Número de artículo: {props.article}</p>
                        <div className="stock">
                            <ul>
                                <li>&gt; 25%</li>
                                <li>&gt; 50%</li>
                                <li>&gt; 75%</li>
                            </ul>
                            <p>Quedan pocas unidades ¡Corre que vuela!</p>
                        </div>
                        <p>Entrega disponible en {props.delivery} días laborables en península</p>
                        <h3>Protege tu producto</h3>
                        <ul className="addonslist">
                            <li>
                                <input type="checkbox" /> Garantía Uso Profesional - Protección 1 Año
                                <span>€89.00</span>
                            </li>
                            <li>
                                <input type="checkbox" /> Ampliación Plus 5 Años
                                <span>€89.00</span>
                            </li>
                        </ul>
                        <h3>Servicios adicionales</h3>
                        <ul className="addonslist">
                            <li>
                                <input type="checkbox" /> Protector HD Ultra + Instalación
                                <span>€19.99</span>
                            </li>
                            <li>
                                <input type="checkbox" /> Protector Vision Guard HD Ultra+ Instalación
                                <span>€24.99</span>
                            </li>
                        </ul>
                    </div>
                    <div className="price">
                        <p>{props.price}</p>
                    </div>
                    <div className="quantity">
                        <p><select><option>{props.quantity}</option></select></p>
                        <p><a href="">Eliminar</a></p>
                    </div>
                    <div className="totalprice">
                        <p>{props.price}</p>
                    </div>
                </div>;

    return item;
    }