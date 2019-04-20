import
  {
    FETCHING_SMURFS ,
    SMURF_FETCH_SUCCESS ,
    SMURF_FETCH_FAILURE ,
    ADDED_SMURF
  }
  from '../actions';

  const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
  }


const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    
    case FETCHING_SMURFS:
      return {
        ...state ,
        fetchingSmurfs: true
      }
    case SMURF_FETCH_SUCCESS:
      return {
        ...state ,
        fetchingSmurfs: false ,
        smurfs: action.payload

      }
    case SMURF_FETCH_FAILURE:
      return {
        ...state , 
        fetchingSmurfs: false, error: action.payload
      };  
    case ADDED_SMURF:
      return {
        ...state ,
        smurfs: action.payload
    }
    default:
      return state;
  }
}

export default rootReducer