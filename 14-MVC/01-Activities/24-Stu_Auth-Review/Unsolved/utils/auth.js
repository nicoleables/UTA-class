const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  //If your loggin you will continue on if you dont loggin you will be redirected back to the moggin page
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
