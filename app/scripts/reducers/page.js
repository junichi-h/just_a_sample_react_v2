import produce from 'immer';
import { NOT_FOUND } from 'redux-first-router';

const initialState = {
  pageName: 'Home'
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'HOME':
      case 'LOGIN':
      case NOT_FOUND:
        draft.pageName = action.type;
        break;
    }
  });
