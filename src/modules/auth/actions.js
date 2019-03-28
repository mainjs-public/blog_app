import request from '../../utils/request';

export function login({ email, password }) {
  return dispatch => {
    dispatch({ type: 'LOGIN_REQUEST' });
    request
      .post('/users/login', { email, password })
      .then(res => res.data)
      .then(({ token }) => {
        localStorage.setItem("token", token);
        dispatch({ type: 'LOGIN_REQUEST_SUCCESS' });
      })
      .catch(error => console.log(error));
  };
}
