//action type
const UPDATE_CUSTOMER_DATA = 'UPDATE_CUSTOMER_DATA';
const CREATE_REGION_DATA = 'CREATE_REGION_DATA';

//action creator
export const updateCustomerData = payload => {
  return {
    type: UPDATE_CUSTOMER_DATA,
    payload,
  };
};

export const createRegionData = values => {
  return {
    type: CREATE_REGION_DATA,
    payload: values,
  };
};

//reducer
const defaultState = {
  propertyType: '',
  propertyOccupation: '',
  propertyCondition: '',
  propertyExtension: '',
  houseType: '',
  landType: '',
  buildingType: '',
  businessType: '',
  propertyArea: 0,
  landArea: 0,
  area: 0,
  year: 0,
  address: {
    streetAndNumber: '',
    zipCode: '',
    place: '',
  },
};

export const customerDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_CUSTOMER_DATA:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    default:
      return state;
  }
};
