import { dashboard_loading } from "./dashboard.actionType";

const initialState = {
  loadingPage: true,
};

export const dashboard_reducer = (state = initialState, { type }) => {
  switch (type) {
    case dashboard_loading:
      return {
        ...state,
        loadingPage: !state.loadingPage,
      };

    default:
      return state;
  }
};
