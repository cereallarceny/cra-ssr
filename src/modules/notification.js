export const ADD_NOTIFICATION = 'notification/ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'notification/REMOVE_NOTIFICATION';

const initialState = {
  notifications: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.notification]
      };

    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications.slice(0, action.index),
          ...state.notifications.slice(action.index + 1)
        ]
      };

    default:
      return state;
  }
};

export const addNotification = notification => {
  notification.id = guid();

  return dispatch => {
    dispatch({
      type: ADD_NOTIFICATION,
      notification
    });
  };
};

export const removeNotification = id => {
  return (dispatch, getState) => {
    getState().notification.notifications.forEach((item, index) => {
      if (item.id === id) {
        dispatch({
          type: REMOVE_NOTIFICATION,
          index: index
        });
      }
    });
  };
};

const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
