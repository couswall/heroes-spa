import { heroes } from "../data/heroes";

export const getHeroeByName = ( name = '') => {
  
    //El name que nos den en los parametros se pone en minuscualas y se quitan los espacios adelante y atrás
    name = name.toLocaleLowerCase().trim();

    // Si nos pasan un name vacio se regresará un arreglo vacio
    if ( name.length === 0) return [];

    //Primero el nombre del heroe se pasa a mínusculas y se regresan todos los heroes que incluya el name que le proporcionamos
    return heroes.filter( heroe => heroe.superhero.toLocaleLowerCase().includes( name ));
}
