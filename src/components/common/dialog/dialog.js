import './dialog.css';

export default function Dialog (props) {
    return(
        <div className="dialog">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button>Cerrar</button>
        </div>
    );
}