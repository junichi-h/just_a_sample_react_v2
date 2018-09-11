export default {
  onBeforeChange: (dispatch, getState, action) => {
    console.log(
      `%conBeforeChange -------> `,
      'color:#ff00ff;backdround:#3f3f3f;padding:.25em;font-size:20px;'
    );
    console.log(dispatch);
    console.log(getState());
    console.log(action);
  },
  onAfterChange: (dispatch, getState) => {
    console.log(
      `%conAfterChange -------> `,
      'color:#ff00ff;backdround:#3f3f3f;padding:.25em;font-size:20px;'
    );
    console.log(dispatch);
    console.log(getState());
  }
};
