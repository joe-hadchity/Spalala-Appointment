"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchUsers = exports.getAllUsers = exports.deleteUser = exports.updateUser = exports.getUserById = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const createUser = async (userData) => {
    const user = new userModel_1.default(userData);
    return await user.save();
};
exports.createUser = createUser;
const getUserById = async (id) => {
    return await userModel_1.default.findById(id).populate('appointments');
};
exports.getUserById = getUserById;
const updateUser = async (id, updateData) => {
    return await userModel_1.default.findByIdAndUpdate(id, updateData, { new: true });
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    return await userModel_1.default.findByIdAndDelete(id);
};
exports.deleteUser = deleteUser;
const getAllUsers = async () => {
    return await userModel_1.default.find().populate('appointments');
};
exports.getAllUsers = getAllUsers;
// Search function to find users by name or email
const searchUsers = async (query) => {
    return await userModel_1.default.find({
        $or: [
            { name: { $regex: query, $options: 'i' } },
            { email: { $regex: query, $options: 'i' } }
        ]
    });
};
exports.searchUsers = searchUsers;
