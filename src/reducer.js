import {
  concat,
  set
} from 'lodash/fp';

const initialState = {
  input: '',
  items: []
};

function createItem(text) {
  return {
    completed: false,
    text: text
  };
}

export default function(state=initialState, action) {
  switch(action.type) {
    case 'CHANGE_INPUT': {
      return set('input', action.value, state);
    } case 'ADD_TODO': {
      const items = concat(state.items, createItem(state.input));
      return set('items', items, state);
    } case 'TOGGLE_TODO': {
      return set(
        `items[${action.idx}].completed`,
        !state.items[action.idx].completed,
        state
      );
    } case 'DELETE_TODO': {
      const items = state.items.filter((item, idx) => idx !== action.idx);
      return set('items', items, state);
    } default: {
      return state;
    }
  }
}
