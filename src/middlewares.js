export const localsMiddleware = (req, res, next) => {
  //   console.log(req.sessionID);
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Youtube Clone";
  res.locals.user = req.session.user;
  //   console.log(res.locals);
  next();
};
