import './box.scss'

export default function Box (props) { 

        const box = <div className="box">
        <img src={props.img} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>Número de artículo: {props.article}</p>
        <p>Quedan pocas unidades</p>
        <p>Entrega disponible en {props.delivery} días laborables en península</p>
        <p>{props.price}</p>
        <p><select><option>{props.quantity}</option></select></p>
        <p>{props.price}</p>
    </div>;

    return box;
    }