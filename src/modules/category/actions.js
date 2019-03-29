import request from '../../utils/request';

export function getCategories() {
  return dispatch => {
    dispatch({ type: 'CATEGORY_REQUEST' });
    request
      .get('/categories')
      .then(res => res.data)
      .then(data => {
        dispatch({ type: 'CATEGORY_REQUEST_SUCCESS', payload: data });
      })
      .catch(error => console.log(error));
  };
}

export function deleteCategory(id) {
  return dispatch => {
    request
      .delete(`/categories/${id}`)
      .then(data => {
        dispatch(getCategories());
      })
      .catch(error => console.log(error));
  };
}


export function addCategory(data) {
  return dispatch => {
    request
      .post('/categories', data)
      .then(data => {
        dispatch(getCategories());
      })
      .catch(error => console.log(error));
  };
}

export function updateCategory(id, data) {
  return dispatch => {
    request
      .put(`/categories/${id}`, data)
      .then(data => {
        dispatch(getCategories());
      })
      .catch(error => console.log(error));
  };
}


