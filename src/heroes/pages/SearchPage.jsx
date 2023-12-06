import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { HeroCard } from '../components/HeroCard'
import { useForm } from '../../hooks/useForm'
import { getHeroeByName } from '../helpers/getHeroeByName';


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  //Forma de parsear los query con la librería externa 
  // const { q = ''} = queryString.parse( location.search );

  const [ searchParams ] = useSearchParams();
  const q = searchParams.get('q') || '';
  const heroes = getHeroeByName( q );

  // SEGUNDA FORMA DE MOSTRAR LAS ALERTAS
  //Si el query está vacío mostrará la alerta de Search Hero
  const showSearch = ( q.length === 0 ); 
  
  //Si el query ya tiene escrito algo y no se encuentra en el array de heroes entonces mostrará la alerta de No found
  const showError = ( q.length > 0 ) && ( heroes.length === 0 );



  const { searchText, onInputChange } = useForm({
    searchText: q 
  });


  //Función del Submit
  const onSearchSubmit = ( event ) => {

    event.preventDefault();

    //Validación de que el usuario escriba algo
    if ( searchText.trim().length <= 1 ) return; 

    navigate(`?q=${ searchText }`);

  }

  return (
    <>
      <h1>Search Page</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text"
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off' 
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className='btn btn-outline-primary mt-1'>
              Search
            </button>

          </form>

        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* PRIMERA FORMA DE MOSTRAR LAS ALERTAS   */}
          {/* {
            // si el query está vacio mostrará el "search hero" 
            // si no está vació hará una validación, Si el arreglo de heroes filtrados es igual 0 entonces mostrará que no se encontró ningún hero
            ( q === '') 
              ? <div className="alert alert-primary">Search a hero</div>
              : ( heroes.length === 0) && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
          } */}

          {/* SEGUNDA FORMA DE MOSTRAR LAS ALERTAS */}
          
          <div className="alert alert-primary animate__animated animate__fadeIn" 
            style={{ display: (showSearch) ? '' : 'none'}}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" 
            style={{ display: (showError) ? '' : 'none' }}>
            No hero with <b>{ q }</b>
          </div>

          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } {...hero} />
            ))
          }
        </div>

      </div>
    </>
  )
}
