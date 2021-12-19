import { useEffect, useState } from "react";
import axios from 'axios';
import CientTable from '../shared/TablaCliente';
import Constants from "../../config/constants";


const HomeClient = () => {

    let [gadgets, setGadgets] = useState([]);
    let [gadget, setGadget] = useState(Constants.default_product);
    let [show, setShow] = useState(false);
    let [editing, setEditing] = useState(false);


    useEffect(() => {
        console.log('iniciando ProductoForm');
        queryProductos();
    }, [])

    const queryProductos = () => {
        axios.get('http://localhost:8080/api/gadget/all')
            .then(response => {
                console.log(response);
                setGadgets(response.data);
            })
    }

    const handleInputChange = (e) => {
        setGadget({
            ...gadget,
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    const agregarNuevo = () => {
        setGadget(Constants.default_product);
        setEditing(false);
        setShow(true);
    }


    const editarProducto = (p) => {
       setEditing(true);
        setGadget(p);
        setShow(true);
    }
 
  return (
      <div className="container">
        <h3>Productos en React</h3>
        <div className="flex-row">
            <div className="col-8">
                <h5>Listado de Productos</h5>
            </div>
          
          <CientTable gadgets={gadgets} />
      </div>
      </div>
  )

}


export default HomeClient