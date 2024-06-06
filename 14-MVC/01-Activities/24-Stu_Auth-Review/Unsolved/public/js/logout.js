const logout = async () => {
  // TODO: Add a comment describing the functionality of this expression
  // If this function is called then you get logged out
  //make a post request to destory the session on the back end
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // TODO: Add a comment describing the functionality of this statement
    // If the logout is successfull then it takes you to a different window
    // If successfull logged out redirect to loggin page
    document.location.replace('/login');
  } else {
    alert('Failed to log out');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
