import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import ToastReto from "../shared/Toast";
import { Modal } from "react-bootstrap";
import Constants from "../../config/constants";

const ProductoForm = () => {
    let [productos, setProductos] = useState([]);
    let [producto, setProducto] = useState(Constants.default_product);
    let [show, setShow] = useState(false);
    let [editing, setEditing] = useState(false);

    //toast
    let [showt, setShowt] = useState(false);
    let [titlet, setTitlet] = useState('');
    let [messaget, setMessaget] = useState('');
    let [variantt, setVariantt] = useState('info');

    const mostrarToast = (title, message, variant = 'info') => {
        setTitlet(title);
        setMessaget(message);
        setVariantt(variant);
        setShowt(true);
    }

    useEffect(() => {
        console.log('iniciando ProductoForm');
        queryProductos();
    }, [])

    const queryProductos = () => {
        axios.get('http://localhost:8080/api/gadget/all')
            .then(response => {
                console.log(response);
                setProductos(response.data);
            })


    }

    const handleInputChange = (e) => {
        setProducto({
            ...producto,
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    const agregarNuevo = () => {
        setProducto(Constants.default_product);
        setEditing(false);
        setShow(true);
    }

    const guardarCambios = () => {

        if (producto.category===null || producto.category.length===0){
            mostrarToast('Error', 'Debe ingresar la categoria', 'danger');
            return;
        }
        if (producto.name===null || producto.name.length===0){
            mostrarToast('Error', 'Debe ingresar la nombre', 'danger');
            return;
        }
        if (producto.price===null || Number.isNaN(producto.price)){
            mostrarToast('Error', 'Precio no valido', 'danger');
            return;
        }
        if (producto.photography===null || producto.photography.length===0 
            || !producto.photography.startsWith('http')){
            mostrarToast('Error', 'URL no valida', 'danger');
            return;
        }


        const head = Constants.headers;

        if (editing) {
            console.log("Actualizando", producto);
            axios.put(`${Constants.url_gadget}/update`, producto, { head }
            )
                .then(response => {
                    setShow(false);
                    mostrarToast('Confirmacion', 'Se ha actualizado el producto');
                    queryProductos();
                })

        } else {
            console.log("Guardando", producto);
            axios.post(`${Constants.url_gadget}/new`, producto, { head }
            )
                .then(response => {
                    setShow(false);
                    mostrarToast('Confirmacion', 'Se ha guardado el producto');
                    queryProductos();
                })
        }


    }

    const deleteProducto = (id) => {
        axios.delete(`${Constants.url_gadget}/${id}`)
            .then(response => {
                mostrarToast('Eliminado', 'Se ha eliminado el producto');
                setShow(false);
                queryProductos();
            })
    }

    const editarProducto = (p) => {
        setEditing(true);
        setProducto(p);
        setShow(true);
    }


    let [seleccionado, setSeleccionado] = useState("2");

    const changeSelect = (e)=>{
        console.log(e);
        setSeleccionado(e.currentTarget.value);
    }

    return (
        <div className="container">
            <h3>Productos en React</h3>
            <div className="row">
                <div className="col-8">
                    <h5>Listado de Productos</h5>
                </div>
                <div className="col-4">
                    <button className="btn btn-primary" onClick={() => agregarNuevo()}>Nuevo Producto</button>
                </div>
            </div>
            <Link to="/">Regresar al Home</Link>

            <table className="table table-hover table-responsive">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Foto</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((p, index) => (
                            <tr key={index}>
                                <td>{p.name}</td>
                                <td>{p.category}</td>
                                <td>{p.description}</td>
                                <td>{p.price}</td>
                                <td>{p.photography}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => editarProducto(p)}>Editar</button>
                                    &nbsp; &nbsp;
                                    <button className="btn btn-danger" onClick={() => deleteProducto(p.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <ToastReto show={showt} title={titlet}
                message={messaget} variant={variantt}
                onClose={() => setShowt(false)}
            ></ToastReto>


            <Modal show={show}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-xs-12 col-lg-6">
                                <label>ID</label>
                                <input type="number" className="form-control" id="id"
                                    placeholder="ID" onChange={handleInputChange} value={producto.id} disabled={editing} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label>Nombre</label>
                                <input type="text" className="form-control" id="name"
                                    placeholder="Nombre" onChange={handleInputChange} value={producto.name} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label>Categoria</label>
                                <input type="text" className="form-control" id="category"
                                    placeholder="Categoria" onChange={handleInputChange} value={producto.category} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label>Precio</label>
                                <input type="number" className="form-control" id="price"
                                    placeholder="Precio" onChange={handleInputChange} value={producto.price} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label>Descripcion</label>
                                <input type="text" className="form-control" id="description"
                                    placeholder="Descripcion" onChange={handleInputChange} value={producto.description} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label>Cantidad en stock</label>
                                <input type="number" className="form-control" id="quantity"
                                    placeholder="Cantidad" onChange={handleInputChange} value={producto.quantity} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label>URL de foto del Producto</label>
                                <input type="text" className="form-control" id="photography"
                                    placeholder="URL de la foto" onChange={handleInputChange} value={producto.photography} />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <label>Select de prueba</label>
                                <select value={seleccionado} onChange={changeSelect} className="form-control">
                                    <option value="1">opcion 1</option>
                                    <option value="2">op 2</option>
                                    <option value="3">op 3</option>
                                </select>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-success" onClick={() => guardarCambios()}>Guardar</button>
                        <button className="btn btn-secondary" onClick={() => setShow(false)}>Cancelar</button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>



        </div>
    )
}

export default ProductoForm