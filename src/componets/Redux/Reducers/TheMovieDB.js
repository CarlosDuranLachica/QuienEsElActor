import Axios from 'axios';

//Constantes
const dataInicial_Movies = {
    Details : null,
}

//Types
const OBTENER = "OBTENER"

//Reducers
export default function MoviesRedux(state = dataInicial_Movies, action) {
    switch(action.type){
        case OBTENER:
            return {...state, Details: action.payload.Details}
        default:
            return state
    }
}

//Acciones
export const ObtenerTheMovieAccion = (Buscar) => async (dispatch, getState) => {
    const key = "30db1237b9167f8afaf9e065b90d16b8";

    try{
        const res = await Axios.get(`https://api.themoviedb.org/3/search/person?api_key=${key}&language=es&query=${Buscar}&page=1&include_adult=false`)

        dispatch({
            type : OBTENER,
            payload : {
                Details : [res.data.results[0]],
            }
        })
        /* console.log(res.data.results); */
    }catch(error){
        console.log(error);
    }
}

export const BorrarTheMovieAccion = () => async (dispatch, getState) => {
    try{
        dispatch({
            type : OBTENER,
            payload : {
                Details : null,
            }
        })
        /* console.log(res.data.results); */
    }catch(error){
        console.log(error);
    }
}
