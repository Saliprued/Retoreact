import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import '../../styles/Home.css'

const HomeAse = ()=>(
   
    <Container>
    
        <div className="row">
            <div className="title">
                <h3>Consultas Asesor Comercial</h3>
            </div>

            <div className="col-lg-4 col-sm-6">
                <div className="card-box bg-green">
                    <div className="inner">
                        <h3>Productos</h3>
                        <p>CRUD de productos</p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <Link to='/productos' className="card-box-footer">Ver Mas <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
            </div>

            <div className="col-lg-4 col-sm-6">
                <div className="card-box bg-green">
                    <div className="inner">
                        <h3>Reportes</h3>
                        <p>reportes</p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <Link to='/reportes' className="card-box-footer">Ver Mas <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
            </div>
            

        </div>

    </Container>
)

export default HomeAse