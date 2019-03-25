import request from '../../utils/request';

export function getBlogs() {
  return dispatch => {
    dispatch({ type: 'BLOG_REQUEST' });
    request
      .get('/')
      .then(res => res.data)
      .then(data => {
        dispatch({ type: 'BLOG_REQUEST_SUCCESS', payload: data });
      })
      .catch(error => console.log(error));
  };
}
