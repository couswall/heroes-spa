import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes, childHeroesRoutes } from '../heroes';
import ErrorPage from '../heroes/pages/ErrorPage';
import { PrivateRoute, PublicRoute  } from './';


//Creación de Rutas
export const router = createBrowserRouter([
    
    // La ruta del login
    // Esta ruta tendrá un layout diferente al de las rutas de heroes
    {
        path: 'login',
        element: (
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        )
    },
    {
        path: "/",
        element: (
          <PrivateRoute>
            {/* Este será el componente en el que se definen las childHeroesRoutes y además el layout que tendrán estas rutas hijas */}
            <HeroesRoutes/>
          </PrivateRoute>
        ),   
        errorElement: <ErrorPage/>, // página de error
        children: childHeroesRoutes // Las childHeroesRoutes son definidas en el componente de HeroesRoutes.jsx
    }
]);

// En el componente definimos las rutas
export const AppRouter = () => {
  return (
    <>
        <RouterProvider router={ router }/>
    </>
  )
}
