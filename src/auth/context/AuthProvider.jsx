import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// const initialState = {
//     logged: false
// }

//Inicialización del state tomando los datos de local storage
const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );

    //La doble negación de Javascript se utiliza para convertir algunos valores como “null”, “undefined”, u objetos a un valor booleano

    /*
        var token_null = null;
        console.log( 'token_null   =', token_null );   // null
        console.log( '!token_null  =', !token_null );   // true
        console.log( '!!token_null =', !!token_null );  // false

        var token_undefined = undefined;
        console.log( 'token_undefined   =', token_undefined );   // undefined
        console.log( '!token_undefined  =', !token_undefined );  // true
        console.log( '!!token_undefined =', !!token_undefined ); // false
    */

    //Si el user existe, entonces logged estará en true
    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({ children }) => {
  
    const [ authState, dispatch ] = useReducer( authReducer, {}, init  );
  
    // Función de login
    const login = ( name = '' ) => {

        const user = { id: 'ABC' , name: name };
        const action = { type: types.login, payload: user };

        // Se guarda el usuario en localStorage
        localStorage.setItem( 'user', JSON.stringify( user ) );

        dispatch( action );
    }

    // Función de logout
    const logout = () => {
        //Elimina el user del localStorage
        localStorage.removeItem('user');
        const action = { type: types.logout }
        dispatch( action );
    }

    return (

    <AuthContext.Provider value={{ 
        ...authState, 
        login: login,
        logout: logout

    }}>
        { children }
    </AuthContext.Provider>

    );
}
