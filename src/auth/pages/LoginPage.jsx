import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const { login } = useContext( AuthContext );

  const navigate = useNavigate();

  const onLogin = () => {

    //Busca el localStorage el lastPath, si no encuentra se manda al inicio
    const lastPath = localStorage.getItem('lastPath') || '/';

    //Función tomada del contexto para hacer login
    login('Andre Ignorosa');

    navigate( lastPath , { replace: true } );
  }

  return (

    <>
        <div className="container mt-5">
          <h1>Login Page</h1>
          <hr />

          <button 
            className="btn btn-primary"
            onClick={ onLogin }
          >
            Login
          </button>
        </div>
    </>

    )
}
