import { Navbar } from '../../ui';
import { Outlet } from 'react-router-dom';

import { MarvelPage, DcPage, SearchPage, HeroPage  } from '../pages';

export const childHeroesRoutes = [
    {
        path:"marvel",
        element: <MarvelPage/>
    },
    {
        path:"dc",
        element: <DcPage/>
    },
    {
        path: 'search',
        element: <SearchPage/>
    },
    {
        path: 'hero/:heroId',
        element: <HeroPage/>
    },
];

//Componente que tendrá todo el layout de las páginas de Heroes
export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <Outlet/>
        </div>
        
    </>
  )
}



