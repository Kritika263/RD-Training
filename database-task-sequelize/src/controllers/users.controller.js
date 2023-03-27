const db = require("../models");
const Joi = require("joi");
const UserTable = db.users;

const validationSchema = Joi.object({
  login: Joi.string().email().required(),
  password: Joi.string().alphanum().required(),
  age: Joi.number().required().min(4).max(130),
});
const create = (req, res) => {
  const { error } = validationSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const errorMessage = error.details.map((item) => item.message);
    return res.status(400).send(errorMessage);
  }
  // Create a user
  const newUser = {
    login: req.body.login,
    password: req.body.password,
    age: req.body.age,
  };
  UserTable.findOne({ where: { login: req.body.login } })
    .then((data) => {
      if (data) {
        res.status(400).send("User already exists");
      } else {
        UserTable.create(newUser).then((data) => {
          res.send(data);
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Retrieve all users from the database.
const findAll = (req, res) => {
  UserTable.findAll({ where: { isDeleted: false } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users.",
      });
    });
};
// Find a single user with an id
const findOne = (req, res) => {
  const id = req.params.id;

  UserTable.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id,
      });
    });
};
const update = (req, res) => {
  const id = req.params.id;

  UserTable.update(req.body, {
    where: { id: id },
  })
    .then(() => {
      res.send("User updated successfully");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users.",
      });
    });
};
const Userdelete = (req, res) => {
  const id = req.params.id;
  UserTable.update(
    { isDeleted: true },
    {
      where: { id: id },
    }
  )
    .then(() => {
      res.send("User Deleted Succesfully");
    })
    .catch(() => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};
module.exports = {
  create,
  findAll,
  findOne,
  update,
  Userdelete,
};
