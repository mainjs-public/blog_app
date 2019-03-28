const initState = {
  pending: false,
  isLogin: localStorage.getItem("token") ? true : false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, pending: true };
    case 'LOGIN_REQUEST_SUCCESS':
      return { ...state, pending: false, isLogin: true };
    default:
      return state;
  }
  return state;
};

export default userReducer;
