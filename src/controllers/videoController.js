export const trending = (req, res) => {
  return res.send("Home Page Videos");
};

export const see = (req, res) => {
  console.log(req.params);
  return res.send(`Watch Video #${req.params.id}`);
};

export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit");
};

export const search = (req, res) => {
  return res.send("Search");
};

export const upload = (req, res) => {
  return res.send("Upload Video");
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
