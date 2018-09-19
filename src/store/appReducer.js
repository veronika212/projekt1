const UPDATE_APP_STATE = 'UPDATE_APP_STATE';

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

    default:
      return state;
  }
};
