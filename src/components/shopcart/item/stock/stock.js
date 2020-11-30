function Low(props) {
    return (
        <div className="stock">
            <ul>
                <li className="low">&gt; 25%</li>
                <li>&gt; 50%</li>
                <li>&gt; 75%</li>
            </ul>
            <p>Quedan pocas unidades</p>
        </div>
    )
}

function Medium(props) {
    return (
        <div className="stock">
            <ul>
                <li className="medium">&gt; 25%</li>
                <li className="medium">&gt; 50%</li>
                <li>&gt; 75%</li>
            </ul>
            <p>¡Corre que vuela!</p>
        </div>
    )
}

function Full(props) {
    return (
        <div className="stock">
            <ul>
                <li className="full">&gt; 25%</li>
                <li className="full">&gt; 50%</li>
                <li className="full">&gt; 75%</li>
            </ul>
            <p>Unidades en stock</p>
        </div>
    )
}



export default function Stock (props) {

    const units = props.units;

    if (units<25) {
        return <Low />
    }
    else if (units<50) {
        return <Medium />
    }
    else {
        return <Full />
    }
}