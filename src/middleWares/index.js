export const userCheck = (req, res, next) => {
  if (req.session.user && req.originalUrl !== '/user/logout') {
    return res.redirect('/');
  }
  return next();
};
