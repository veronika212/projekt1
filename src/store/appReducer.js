//action type
const UPDATE_APP_DATA = 'UPDATE_APP_DATA';
const UPDATE_APP_STATE = 'UPDATE_APP_STATE';

// action creator
export const updateAppData = payload => {
  return {
    type: UPDATE_APP_DATA,
    payload,
  };
};

//reducer
const defaultState = {
  currentStep: 0,
  totalSteps: 0,
  title: 'Angaben zur Immobilie',
};

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_APP_STATE:
      return {
        ...state,
      };
    case UPDATE_APP_DATA:
      return {
        ...state,
        title: action.payload,
      };

    default:
      return state;
  }
};
