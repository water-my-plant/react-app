import * as types from './actionTypes';
import axiosWithAuth from '../axios/axiosWithAuth';

const baseURL = 'https://water-my-plants-api.herokuapp.com/api/';

const CreateAPIUrl = (extension) => {
    return `${baseURL}/${extension}`;    
}

export const setPlants = (plants) => {
    return {
        types: types.SET_PLANTS,
        payload: plants,
    };
}

export const setError = (err) => {
    return {
        type: types.API_ERROR,
        payload: err,
    }
}

export const fetchPlants = () => dispatch => {
    dispatch({ type: types.FETCHING_PLANTS });
    return axiosWithAuth()
        .get(CreateAPIUrl('plants'))
        .then(res => {
            dispatch(setPlants(res.data));
            dispatch({ type: types.FETCH_SUCCESS });
        })
        .catch(error => {
            dispatch(setError(error.message));
        })
}