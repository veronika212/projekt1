const UPDATE_APP_DATA = 'UPDATE_APP_DATA';

const defaultState = {
  propertyType: '',
  area: 0,
  year: 0,
};

export const customerDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_APP_DATA:
      return {
        ...state,
      };

    default:
      return state;
  }
};
