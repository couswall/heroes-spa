import { Link } from 'react-router-dom';

const CharacterByHero = ({ characters, alter_ego }) => {

    //1. forma
    // if ( characters === alter_ego) return (<></>);
    // return <p>{ characters }</p>

    // 2nda forma

    return ( characters === alter_ego )
        ? <></>
        : <p>{ characters }</p>

}

export const HeroCard = ( { 
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters, }) => {

    
    const heroeImgUrl = `/heroes/${ id }.jpg`; 
    
    //Segunda forma de mostrar los characters, creando la etiquieta en una variable
    // const characterByHero = ( <p>{characters}</p> );

  return (
    <div className="col">
        <div className="card">

            <div className="row no-gutters">

                <div className="col-4">
                    <img src= { heroeImgUrl } className="card-img" alt= { superhero } />
                </div>

                <div className="col-8">

                    <div className="card-body">

                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>

                    {/* Hay tres formas de mostrar  */}
                        {
                            // Primera forma 
                            // ( alter_ego !== characters ) && <p>{characters}</p>

                            //Segunda forma
                            // ( alter_ego !== characters ) && characterByHero
                        }

                        {/* Tercera Forma */}
                        <CharacterByHero characters={ characters } alter_ego={ alter_ego }/>

                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            Mas...
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
