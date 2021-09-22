import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("Join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  const { name, email, username, password, location } = req.body;
  await User.create({
    name,
    email,
    username,
    password,
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
