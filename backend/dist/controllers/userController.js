"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchForUsers = exports.getAllUsersController = exports.deleteUserById = exports.updateUserById = exports.getUser = exports.registerUser = void 0;
const userService_1 = require("../services/userService");
// Create a new user
const registerUser = async (req, res) => {
    try {
        const user = await (0, userService_1.createUser)(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};
exports.registerUser = registerUser;
// Get a user by ID
const getUser = async (req, res) => {
    try {
        const user = await (0, userService_1.getUserById)(req.params.id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json({ message: 'User not found', error });
    }
};
exports.getUser = getUser;
// Update a user by ID
const updateUserById = async (req, res) => {
    try {
        const updatedUser = await (0, userService_1.updateUser)(req.params.id, req.body);
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};
exports.updateUserById = updateUserById;
// Delete a user by ID
const deleteUserById = async (req, res) => {
    try {
        await (0, userService_1.deleteUser)(req.params.id);
        res.status(204).json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};
exports.deleteUserById = deleteUserById;
// Get all users
const getAllUsersController = async (req, res) => {
    try {
        const users = await (0, userService_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};
exports.getAllUsersController = getAllUsersController;
// Search users by name or email
const searchForUsers = async (req, res) => {
    try {
        const users = await (0, userService_1.searchUsers)(req.query.q);
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Error searching for users', error });
    }
};
exports.searchForUsers = searchForUsers;
