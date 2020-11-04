import { createSelector } from 'reselect';

const selectAlert = (state) => state.alert;

export const selectAlerts = createSelector(
  [selectAlert],
  (alert) => alert.alerts
);
