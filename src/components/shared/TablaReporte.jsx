import LineaDetalle from "./linea-detalle";

const TablaReporte = (props) => {

    return (
        <table className="table table-hover table-responsive">
            <thead>
                <tr>
                    <th>Cod. Catalogo</th>
                    <th>Cod. Asesor</th>
                    <th>Nombre Asesor</th>
                    <th>Categoria</th>
                    <th>Cod. Producto</th>
                    <th>Nombre Producto</th>
                    <th>Valor Unitario</th>
                    <th>Cantidad</th>
                    <th>Valor Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.detalles.map((p, index) => {
                        return (
                            <LineaDetalle key={index} linea={p} />
                        );
                    }
                    )
                }

            </tbody>
        </table>
    )
}

export default TablaReporte