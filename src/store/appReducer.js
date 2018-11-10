//action type
const UPDATE_APP_DATA = "UPDATE_APP_DATA";
const APPEND_HISTORY_INDEX = "APPEND_HISTORY_INDEX";
const REMOVE_HISTORY_INDEX = "REMOVE_HISTORY_INDEX";

// action creator
export const updateAppData = payload => {
  return {
    type: UPDATE_APP_DATA,
    payload
  };
};

export const apendHistoryIndex = payload => {
  return {
    type: APPEND_HISTORY_INDEX,
    payload
  };
};

export const removeHistoryIndex = payload => {
  return {
    type: REMOVE_HISTORY_INDEX
  };
};

//reducer
const defaultState = {
  currentStep: 1,
  totalSteps: 1,
  title: "Um welche Art von Immobilie handelt es sich?",
  currentSlideId: "propertyType",
  history: [0],
  error: false
};

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_APP_DATA:
      return {
        ...state,
        ...action.payload
      };

    case APPEND_HISTORY_INDEX:
      return {
        ...state,
        history: [action.payload, ...state.history]
      };

    case REMOVE_HISTORY_INDEX:
      return {
        ...state,
        history: [...state.history.slice(1)]
      };

    default:
      return state;
  }
};

export const selectCurrentSlideId = state => state.app.currentSlideId;
export const selectHistory = state => state.app.history;
export const selectAppDataItem = (state, key) => state.app[key];
