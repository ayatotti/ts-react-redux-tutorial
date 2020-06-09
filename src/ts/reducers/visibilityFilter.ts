import {setVisibilityFilterAction} from "../actions/index";

const visibilityFilter = (state = 'SHOW_ALL', action: setVisibilityFilterAction) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state
  }
};

export default visibilityFilter