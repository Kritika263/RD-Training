const users = require('../db');
const Joi = require('joi');
const { v4: uuidv4 } = require('uuid');
const getAllUsers = (req, res) => {
    const userData = users.filter((user) =>  !user.isDeleted);
    res.send(userData);
};
const autoSuggestUsers = (req, res) => {
    const { loginSubstring = '', limit = '' } = req.query;
    const list = users
        .filter((user) => user.login.startsWith(loginSubstring) && !user.isDeleted)
        .sort((a, b) => a.login.localeCompare(b.login))
        .slice(0, limit);
    res.send(list);
};
const getUserbyId = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((item) => item.id === id);
    if (foundUser) {
        res.status(201).send(foundUser);
    } else {
        res.send('No User With Requested Id Exists');
    }
};
const deleteUser = (req, res) => {
    const { id } = req.params;

    const userToBeDeleted = users.find((user) => user.id === id);
    if (userToBeDeleted) {
        userToBeDeleted.isDeleted = true;
        res.send(`user with ${id} got deleted`);
    } else {
        res.send('Check The User Id requeste');
    }
};
const updateUser = (req, res) => {
    const { id } = req.params;
    const { login, password, age } = req.body;
    const userToBeUpdated = users.find((user) => user.id === id);
    if (login) {
        userToBeUpdated.login = login;
    }
    if (password) {
        userToBeUpdated.password = password;
    }
    if (age) {
        userToBeUpdated.age = age;
    }
    res.send(`user with the ${id} got updated`);
};
const validationSchema = Joi.object({
    login: Joi.string().email().required(),
    password: Joi.string().alphanum().required(),
    age: Joi.number().required().min(4).max(130)
});
const createUser = (req, res) => {
    const { error } = validationSchema.validate(req.body, {
        abortEarly: false
    });
    if (error) {
        const errorMessage = error.details.map((item) => item.message);
        return res.send(errorMessage);
    }
    const user = req.body;
    const existingIds = users.map((addedPerson) => addedPerson.login);

    if (!existingIds.includes(user.login)) {
        const userWithId = { id: uuidv4(), ...user, isDeleted:false };
        users.push(userWithId);
        res.send('User with the name  added to the database');
    } else {
        res.send('User with this login already exists');
    }
};
module.exports = {
    getAllUsers,
    autoSuggestUsers,
    getUserbyId,
    deleteUser,
    updateUser,
    createUser
};
