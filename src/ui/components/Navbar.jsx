import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const navigate = useNavigate();

    const { user, logout } = useContext( AuthContext );

    const onLogout = () => {
        
        logout();

        navigate( '/login', {
            // El replace remplaza la ruta anterior con la actual 
            /* Si tenemos las siguientes rutas: 
                1. /marvel
                2./dc
            Y presionamos el botón de logout lo que pasará es que remplazará la ruta 2 por la de /login, pero la ruta 1 seguirá siendo Marvel. Entonces quedaría: 
                1./marvel
                2./login
            */
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}` } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                         className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}` } 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                         className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}` } 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span className='nav-item nav-link text-primary'>
                        {/* EL signo de interrogación indica de que si el valor es null que no continue, si no es null que continue */}
                        { user?.name }
                    </span>

                    <button 
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}