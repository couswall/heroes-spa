import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

  return (
    <>
        <div className="row rows-cols-1 row-cols-md-3 g3 animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    // el ...heroe se usa para desestructurar todas las propiedades del heroe
                    <HeroCard key={ hero.id } {...hero}/>
                ))
            }
        </div>
    </>

    )
}
