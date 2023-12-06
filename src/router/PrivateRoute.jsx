import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    
    const { logged } = useContext( AuthContext );

    // Guarda la última ruta en la que estuvo el usuario para que cuando haga login se mantenga en esa ruta
    const { pathname, search } = useLocation();
    const lastPath = pathname + search;

    // Guarda la ruta en localStorage
    localStorage.setItem('lastPath', lastPath );

    
    // Si el usuario está logeado entonces se mostrarán las rutas hijas, si no, lo va a mandar a login
    return ( logged )
        ? children 
        : <Navigate to="/login" />
}
