import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  //   console.log(req.sessionID);
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Youtube Clone";
  res.locals.loggedInUser = req.session.user || {};
  //   console.log(res.locals);
  next();
};

export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "Log in first");
    return res.redirect("/login");
  }
};

export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "Not authorized");
    return res.redirect("/");
  }
};

export const avatarUpload = multer({
  dest: "uploads/avatars/",
  limits: { fileSize: 3 * 1024 * 1024 },
});

export const videoUpload = multer({
  dest: "uploads/videos/",
  limits: { fileSize: 10 * 1024 * 1024 },
});
