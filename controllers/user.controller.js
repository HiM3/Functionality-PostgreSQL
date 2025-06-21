const User = require("../models/User");

exports.create = async (req, res) => {
  const { name, email } = req.body;
  const newUser = await User.create({ name, email });
  res.status(201).json(newUser);
};

exports.getALl = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.getUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).send({ error: "User not found" });
  }
  res.json(user);
};

exports.update = async (req, res) => {
  const { name, email } = req.body;
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).send({ error: "User not found" });
  }
  user.name = name ?? user.name;
  user.email = email ?? user.email;
  await user.save();
  res.json(user);
};

exports.trash = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).send({ error: "User not found" });
  }
  await user.destroy();
  res.json({ message: "User deleted" });
};
