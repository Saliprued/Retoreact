const LineaDetalle = (props) => (
    <tr>
        <td>{props.linea.codcatalogo}</td>
        <td>{props.linea.codasesor}</td>
        <td>{props.linea.nombreasesor}</td>
        <td>{props.linea.categoria}</td>
        <td>{props.linea.codproducto}</td>
        <td>{props.linea.nombreproducto}</td>
        <td>{props.linea.valorunitario}</td>
        <td>{props.linea.cantidad}</td>
        <td>{props.linea.valortotal}</td>
    </tr>
    
)

export default LineaDetalle