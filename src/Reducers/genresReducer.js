
import { FETCH_GENRES_SUCCESSED, GENRES_ARE_LOADING,  FETCH_GENRES_FAILED, FETCHING_GENRES } from '../Actions/types';


const initialState = {
    genres: [],
    isLoading: true,
    isError: false
}


export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_GENRES_SUCCESSED: {
            return {
              ...state,
              isError: false,
              isLoading: false,
              genres: action.payload.genres
            }
          }

        case FETCH_GENRES_FAILED: {
            return {
                ...state,
                isError: true,
                isLoading:false
            }
        }

        case FETCHING_GENRES: {
            return{
              ...state,
              isLoading: true
            }
          }

        case GENRES_ARE_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
          
        default:
            return state
    }

}