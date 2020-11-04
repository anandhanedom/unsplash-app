import { v4 as uuidv4 } from 'uuid';
import { AlertActionTypes } from './alert.types';

//set alert
const setAlert = (msg, type, id) => {
  return {
    type: AlertActionTypes.SET_ALERT,
    payload: { msg, type, id },
  };
};

//Remove alert
const removeAlert = (id) => {
  return {
    type: AlertActionTypes.REMOVE_ALERT,
    payload: id,
  };
};

//Add alert
export const addAlert = (msg, type, timeout = 5000) => {
  return (dispatch) => {
    const id = uuidv4();
    dispatch(setAlert(msg, type, id));
    setTimeout(() => dispatch(removeAlert(id)), timeout);
  };
};
