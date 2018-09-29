//action type
const UPDATE_CUSTOMER_DATA = 'UPDATE_CUSTOMER_DATA';
const CREATE_REGION_DATA = 'CREATE_REGION_DATA';
const CREATE_CONTACT_DATA = 'CREATE_CONTACT_DATA';

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

export const createContactData = values => {
  return {
    type: CREATE_CONTACT_DATA,
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
  contact: {
    solutation: '',
    firstName: '',
    lastName: '',
    mail: '',
    preset: '',
    phone: 0,
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

export const selectCustomerDataItem = (state, key) => state.customerData[key];
