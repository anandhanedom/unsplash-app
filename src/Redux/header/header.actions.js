import { HeaderActionTypes } from './header.types';

export const toggleModal = () => ({
  type: HeaderActionTypes.TOGGLE_MODAL,
});

export const handleSearchChange = (value) => ({
  type: HeaderActionTypes.SEARCH_CHANGE,
  payload: value,
});
