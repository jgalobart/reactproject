import React, { Suspense } from 'react';
import './item.scss'

const Stock = React.lazy(() => import('./stock/stock.js'));

export default class Item extends React.Component { 

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.state = {
            quantity : 1,
            total: props.price,
            showDialog: false,
        }
    }

    handleChange(event) {
        console.log('change!');

        this.setState({
            quantity: event.target.value,
            total: event.target.value * this.props.price,
        });
    }

    openDialog(event) {
        console.log("open Dialog");
        this.setState({
            showDialog: true,
        });
    }

    render() {

        var item = [];

        item.push ( 
                <div className="item">
                    <div className="productimg">
                        <img src={this.props.img} alt="imagen" />
                        <p><a href="index.html" className="addFavorite">Añadir a favoritos</a></p>
                    </div>
                    <div className="description">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.description}</p>
                        <p className="itemId">Número de artículo: {this.props.article}</p>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Stock units={this.props.units} />
                        </Suspense>
                        <p className="delivery">Entrega disponible en <span>{this.props.delivery}</span> días laborables en península</p>
                        <h3>Protege tu producto</h3>
                        <ul className="addonslist">
                            <li>
                                <input type="checkbox" onChange={this.openDialog} /> Garantía Uso Profesional - Protección 1 Año
                                <span>€ 89.00</span>
                            </li>
                            <li>
                                <input type="checkbox" /> Ampliación Plus 5 Años
                                <span>€ 89.00</span>
                            </li>
                        </ul>
                        <h3>Servicios adicionales</h3>
                        <ul className="addonslist">
                            <li>
                                <input type="checkbox" /> Protector HD Ultra + Instalación
                                <span>€ 19.99</span>
                            </li>
                            <li>
                                <input type="checkbox" /> Protector Vision Guard HD Ultra+ Instalación
                                <span>€ 24.99</span>
                            </li>
                        </ul>
                    </div>
                    <div className="price">
                        <p>€ {this.props.price}</p>
                    </div>
                    <div className="quantity">
                        <p>
                            <select onChange={this.handleChange} value={this.state.quantity}>
                                <option>{this.props.quantity}</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </p>
                        <p><a href="index.html" className="removeItem">Eliminar</a></p>
                    </div>
                    <div className="totalprice">
                        <p>€ {this.state.total}</p>
                    </div>
                </div>);

        if (this.state.showDialog) {
            item.push(<Dialog />);
        }

    return item;
    }
        
    }