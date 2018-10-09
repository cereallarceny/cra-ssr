export const SET_CURRENT_PROFILE = "auth/SET_CURRENT_PROFILE";

const initialState = {
  currentProfile: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: action.profile
      };

    default:
      return state;
  }
};

export const getCurrentProfile = id => dispatch =>
  fetch("http://localhost:8000/data/profile/" + id)
    .then(res => res.json())
    .then(
      result => {
        dispatch({
          type: SET_CURRENT_PROFILE,
          profile: result.profile
        });
      },
      error => {
        console.log(error.message);
      }
    );

export const removeCurrentProfile = () => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: SET_CURRENT_PROFILE,
      profile: {}
    });

    resolve({});
  });
