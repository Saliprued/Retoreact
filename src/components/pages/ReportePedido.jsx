import { useEffect, useState } from "react"

import pedidos from "../../config/pedidos";
import TablaReporte from "../shared/TablaReporte";

const ReportePedido = () => {
    let [datos, setDatos] = useState([]);

    useEffect(() => {
        setDatos(pedidos.detalle);
    }, []);

    return (
        <div className="container">
            <h3>Reporte de Pedido</h3>
            <TablaReporte detalle={datos}></TablaReporte>
        </div>
    )
}

export default ReportePedido