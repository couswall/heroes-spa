import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroeById';

export const HeroPage = () => {

  
  const { heroId } = useParams();

  //Busca el heroe dentro del array de heroes con el que coincida el id
  //El useMemo se usa para memorizar la función 
  const hero = useMemo( () => getHeroById( heroId ), [ heroId ]);

  
  const navigate = useNavigate();
  
  //Función para Regresar 
  const onNavigateBack = () => {
    //Regresa a la pantalla anterior   
     navigate(-1); 

    // if ( hero.publisher === 'Marvel Comics' ) {
    //   navigate('/marvel');
    // }else if ( hero.publisher === 'DC Comics') {
    //   navigate('/dc');
    // }

  }


  //Si el heroe es undefined entonces lo redirecciona a la página principal
  if ( !hero ) {
    return <Navigate to={'/'}/>
  }
 

  return (
    
    <div className="row mt-5 ">
      
      <div className="col-4">
        <img 
          src={`/heroes/${ hero.id }.jpg`} 
          alt= { hero.superhero }
          className='img-thumbnail animate__animated animate__fadeInLeft' 
        />
      </div>

      <div className="col-4">
        <h3>{ hero.superhero }</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Alter ego:</b> { hero.alter_ego }</li>
          <li className='list-group-item'> <b>Publisher:</b> { hero.publisher }</li>
          <li className='list-group-item'> <b>First Appearance:</b> { hero.first_appearance }</li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{ hero.characters }</p>

        <button 
          className='btn btn-outline-primary'
          onClick={ onNavigateBack }
        >
          Regresar
        </button>
      </div>
    </div>

  )
}
