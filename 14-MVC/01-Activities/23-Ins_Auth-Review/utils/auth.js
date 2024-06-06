const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {//seeing if the logged in value is set to true(if it is true continue on)(if false send back to loggin page)
    res.redirect('/login');//redirect them to thr login page
  } else {
    next();//this is what ends the middleware and moves onto the next thing in the cycle
  }//if they are logged in we continue
};

module.exports = withAuth;
//custome middleware
