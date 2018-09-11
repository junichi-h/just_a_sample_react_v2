import produce from 'immer';

const initialState = {
  isLoading: false
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'Loading':
        draft.isLoading = true;
    }
  });
