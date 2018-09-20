//action type
const UPDATE_CUSTOMER_DATA = 'UPDATE_CUSTOMER_DATA';

//action creator
export const updateCustomerData = payload => {
  return {
    type: UPDATE_CUSTOMER_DATA,
    payload,
  };
};

//reducer
const defaultState = {
  propertyType: '',
  area: 0,
  year: 0,
};

export const customerDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_CUSTOMER_DATA:
      return {
        ...state,
      };

    default:
      return state;
  }
};
