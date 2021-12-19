import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Constants from "../../config/constants";
import ToastDanilo from "./toast";


const Perfil = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user);
    let tipoUser = user.type;
    if(tipoUser == 'ASE'){
        tipoUser = 'Asesor Comercial';
    }else if(tipoUser == 'COORD'){
        tipoUser = 'Coordinador de Zona';
    }


    return (
        <div className="container">
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Identificacion</th>
                            <th>Nombre</th>
                            <th>E-mail</th>
                            <th>Perfil</th>
                            <th>Zona</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tareas.map((task, index) => (
                                <tr key={index}>
                                    <td>{user.identification}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.type}</td>
                                    <td>{user.zone}</td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
                <br />
                <br />

                <Link to="/">Volver al Inicio</Link>
                <ToastReto show={showt} title={titlet}
                    message={messaget} variant={variantt}
                    onClose={() => setShowt(false)}
                ></ToastReto>
            </div>
        </div>
    )

}


export default Perfil