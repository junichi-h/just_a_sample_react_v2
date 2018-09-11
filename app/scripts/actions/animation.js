import { Power2, TweenLite } from 'gsap';

export const UPDATE_ANIMATION_STATE = '@@/animation/UPDATE_ANIMATION_STATE';

export const onEnter = element => dispatch => {
  TweenLite.fromTo(
    element,
    1,
    {
      alpha: 0
    },
    {
      alpha: 1,
      ease: Power2.easeOut,
      onComplete: () => {
        TweenLite.set(element, {
          clearProps: 'opacity'
        });
        dispatch({
          type: UPDATE_ANIMATION_STATE,
          payload: {
            isAnimation: false
          }
        });
      }
    }
  );
};

export const onExit = element => dispatch => {
  dispatch({
    type: UPDATE_ANIMATION_STATE,
    payload: {
      isAnimation: true
    }
  });
  TweenLite.to(element, 1, {
    alpha: 0,
    ease: Power2.easeIn
  });
};
