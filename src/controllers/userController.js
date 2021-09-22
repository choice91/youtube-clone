import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("Join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  const { name, email, username, password1, password2, location } = req.body;
  const pageTitle = "Join";
  if (password1 !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username/email is already taken.",
    });
  }
  await User.create({
    name,
    email,
    username,
    password1,
    password2,
    location,
  });
  return res.redirect("/login");
};

export const edit = (req, res) => {
  return res.send("Edit");
};

export const remove = (req, res) => {
  return res.send("Delete");
};

export const login = (req, res) => {
  return res.send("Login");
};

export const logout = (req, res) => {
  return res.send("Logout");
};

export const see = (req, res) => {
  return res.send("See User");
};
