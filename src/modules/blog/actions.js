import request from '../../utils/request';

export function getBlogList() {
  return dispatch => {
    dispatch({ type: 'BLOG_REQUEST' });
    request
      .get('/blogs')
      .then(res => res.data)
      .then(data => {
        console.log(data);
        dispatch({ type: 'BLOG_REQUEST_SUCCESS', payload: data });
      })
      .catch(error => console.log(error));
  };
}

export function deleteBlog(id) {
  return dispatch => {
    request
      .delete(`/blogs/${id}`)
      .then(data => {
        dispatch(getBlogList());
      })
      .catch(error => console.log(error));
  };
}


export function addBlog(data) {
  return dispatch => {
    request
      .post('/blogs', data)
      .then(data => {
        dispatch(getBlogList());
      })
      .catch(error => console.log(error));
  };
}

export function updateBlog(id, data) {
  return dispatch => {
    request
      .put(`/blogs/${id}`, data)
      .then(data => {
        dispatch(getBlogList());
      })
      .catch(error => console.log(error));
  };
}


