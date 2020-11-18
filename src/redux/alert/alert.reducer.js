import { AlertActionTypes } from './alert.types';

const INITIAL_STATE = {
  alerts: [],
};

const AlertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AlertActionTypes.SET_ALERT:
      if (!state.alerts.length) {
        return {
          alerts: [...state.alerts, action.payload],
        };
      } else {
        return state;
      }

    case AlertActionTypes.REMOVE_ALERT:
      return {
        alerts: state.alerts.filter((alert) => alert.id !== action.payload),
      };

    default:
      return state;
  }
};

export default AlertReducer;
