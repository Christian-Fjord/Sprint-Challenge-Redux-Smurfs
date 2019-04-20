import axios from 'axios';

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_FAILURE = "SMURF_FETCH_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADDED_SMURF = "ADDED_SMURF";
export const ADD_ERROR = "ADD_ERROR";

export const fetchSmurfs = () => dispatch => {
  dispatch({type: FETCHING_SMURFS});
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      dispatch({type: SMURF_FETCH_SUCCESS, payload: response.data})
    })
    .catch(error => {
      dispatch({type: SMURF_FETCH_FAILURE, payload: error});
    })
}

export const addNewSmurf = (newSmurf) => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios 
  .post('http://localhost:3333/smurfs', newSmurf)
  .then( response => {
    dispatch({ type: SMURF_ADDED, payload: response.data});
  })
  .catch(error => {
    dispatch({ type: ADD_SMURF_ERROR, payload: error});
  });
}; 