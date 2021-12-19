import React from 'react'
import Table from 'react-bootstrap/Table'

const ClientTable = (props) => {

    console.log(props.gadgets)

    return (
        <Table striped bordered hover size="sm">
            <thead>
             <tr>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Foto</th>
            </tr>
            </thead>
            <tbody>
            {
            props.gadgets.map((p, index) => (
                <tr key={index}>
		            <td>{p.name}</td>
		            <td>{p.category}</td>
		            <td>{p.description}</td>
		            <td>{p.price}</td>
		            <td>{p.photography}</td>
		        </tr>
            ))
        }
    </tbody>
  </Table>
)
    }

export default ClientTable