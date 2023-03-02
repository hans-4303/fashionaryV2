import { memberManagementActions } from "../reducers/memberManagementReducer";

function increaseActionFunc() {
  return (dispatch, getState) => {
    dispatch(memberManagementActions.increase());
  };
}

function decreaseActionFunc() {
  return (dispatch, getState) => {
    dispatch(memberManagementActions.decrease());
  };
}

export const memberManagementActionsFunc = {
  increaseActionFunc,
  decreaseActionFunc,
};