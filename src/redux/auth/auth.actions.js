//toggleUsers helps to toggle login and signup page in a single route
export const toggleUser = () => ({
  type: imageCollectionActionTypes.TOGGLE_USER_TYPE
});

export const toggleUserAsync = () => {
  return dispatch => {
    dispatch(toggleUser());
  };
};


// User sign Up
​export const signUpWithCredentialAsync = (userName, password) => {
  return async dispatch => {
    let response;
    await axios
      .get("/signup")
      .then(res => {
        response = res;
      })
      .catch(err => alert("Error Hitting : ", err));
    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);
    dispatch(addUserDetailsToStore(userName));
  };
};
​
// User login
export const addUserDetailsToStore = user => ({
  type: imageCollectionActionTypes.ADD_USER,
  payload: user
});
​
export const loginWithCredentialsAsync = (userName, password) => {
  return async dispatch => {
    let response;
​
    await axios
      .get("/login", { email: userName, password: password })
      .then(res => {
        response = res.data;
      });
​
    localStorage.setItem("access_token", response.access_token);
    localStorage.setItem("refresh_token",response.refresh_token)
    dispatch(addUserDetailsToStore(userName));
  };
};
​
// Login with refresh token
export const loginWithRefreshToken = async refresh_token => {
  let response;
  await axios
    .get("/login", {
      headers: {
        Authorization: refresh_token
      }
    })
    .then(res => (response = res.data));
​
  localStorage.setItem("access_token", response.access_token);
  localStorage.setItem("refresh_token",response.refresh_token)
};
​
// user Logout
​
export const removeUserFromStore = () => ({
  type: imageCollectionActionTypes.REMOVE_USER
});
​
export const logoutAsync = () => {
  return async dispatch => {
    let response;
    await axios.get("/logout", { headers: headers }).then(res => {
      response = res;
    });
    if (response.status === 200 && response.data.Authorization === "") {
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("access_token");
    } else {
      alert("Something went wrong... please try again");
    }
  };
};
