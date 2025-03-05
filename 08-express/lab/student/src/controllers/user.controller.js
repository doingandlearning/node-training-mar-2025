import { NextFunction, Request, Response } from "express";

const users = [];

function getAllUsers(req, res, next) {
  try {
    res.send(users);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong." });
  }
}

function createNewUser(req, res) {
  try {
    const user = req.body;
    if (!user.location || !user.name) {
      res
        .status(400)
        .json({ message: "You need to provide a name and location." });
    } else {
      user.id = users.length + 1;
      users.push(user);
      res.json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong." });
  }
}
function getUserById(req, res) {
  try {
    const user = users.find((u) => u.id === parseInt(req.params.id));

    if (!user) {
      res.status(404).json({ message: "User not found." });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong." });
  }
}
function updateUserById(req, res) {
  try {
    const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));

    if (userIndex === -1) {
      res.status(404).json({ message: "User could not be found." });
    } else {
      users[userIndex] = { ...users[userIndex], ...req.body };
      res.send(users[userIndex]);
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong." });
  }
}

function deleteUserById(req, res) {
  try {
    const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));

    if (userIndex === -1) {
      res.status(404).json({ message: "User could not be found." });
    } else {
      users.splice(userIndex, 1); // Changes the underlying array!
      res.status(204).send();
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong." });
  }
}

export default {
  getAllUsers,
  createNewUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
