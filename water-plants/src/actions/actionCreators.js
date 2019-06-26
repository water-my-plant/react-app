import * as types from './actionTypes';
import axiosWithAuth from '../axios/axiosWithAuth';
import axios from 'axios';

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
        });
}

export const login = (email, password) =>  dispatch => {
    dispatch({ type: types.LOGGING_IN });
    return axios
        .post(CreateAPIUrl('auth/login'), { email, password })
        .then(res => {
            localStorage.setItem('token', res.data);
            dispatch({ type: types.LOGIN_SUCCESS });
        })
        .catch(error => {
            dispatch({ type: types.LOGIN_FAIL });
        });
}

export const register = ({ email, username, password, phone_number}) => dispatch => {
    return axios
    .post(CreateAPIUrl('auth/register'), { email,username,phone_number,password })
    .then(res => {
        dispatch({ type: types.POST_SUCCESS });
    })
    .catch(error => {
        dispatch(setError(error.message));
    });
}