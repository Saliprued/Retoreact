import * as React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from "react"
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import loginIcon from '../../img/gamer.png'
import '../../styles/Signin.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Login = () => {



    // Hook para redireccionar
   const navigate = useNavigate();
  
   const [user, setUser] = useState(null);

  // Mutation para crear nuevos usuarios en apollo


  const formik = useFormik({
      initialValues: {
          email: '',
          password: ''
      }, 
      validationSchema: Yup.object({
          email: Yup.string()
                      .email('El email no es válido')
                      .required('El email no puede ir vacio'),
          password: Yup.string()
                      .required('El password es obligatorio')
      }), 
      onSubmit: async valores => {
        
       navigate('/asesor');

      
      }
  })    
  
    


   /* const autenticar = () => {

        if (user.email ===null || user.email.length===0){
            alert('Error', 'ingresar el email', 'danger');
            return;
        }
        if (user.password===null || user.password.length===0){
            alert('Error', ' ingresar ', 'danger');
            return;
        }
    }
    */

    return (

    <div className="fondo">

        <div className ='modal-dialog text-center'>
        <div className='col-sm-8 main-section'>
            <div className='modal-content'>
                <div className='col-12 user-img'>
                    <img className="icon-img" src={loginIcon} alt="icon"/>
                </div>
                <form className="col-12" 
                  onSubmit={formik.handleSubmit}>
                <div className="form-group" id="user-group">
                    <label>Usuario</label>
                    <input type="text" className="form-control" id="email"
                        placeholder="email" onChange={formik.handleChange} value={formik.values.email} />
                </div>
                { formik.touched.email && formik.errors.email ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" >
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.email}</p>
                </div>
            ) : null  }
                <div className="form-group" id="contrasena-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" id="password"
                        placeholder="Contraseña" onChange={formik.handleChange} value={formik.values.password} />
                </div>
                { formik.touched.password && formik.errors.password ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" >
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.password}</p>
                </div>
            ) : null  }
                <br></br>

                <Button variant= "primary btn-block"  type="submit"><FontAwesomeIcon icon={faSignInAlt}/> Iniciar Sesión </Button>

                </form>
                <div className="border"></div>
                <p>¿No tienes cuenta?</p>
                <Link to='/cliente'>
                 <a >Ingresa como Invitado</a>
                </Link>
                <div id="mensaje"></div> <br></br>          
            </div>
        </div>
        </div>
    </div>
    )

}
export default Login
