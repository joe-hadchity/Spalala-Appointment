import { Request, Response } from 'express';
import { createUser, getUserById, updateUser, deleteUser, searchUsers, getAllUsers } from '../services/userService';

// Create a new user
export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

// Get a user by ID
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: 'User not found', error });
  }
};

// Update a user by ID
export const updateUserById = async (req: Request, res: Response) => {
  try {
    const updatedUser = await updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Delete a user by ID
export const deleteUserById = async (req: Request, res: Response) => {
  try {
    await deleteUser(req.params.id);
    res.status(204).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

// Get all users


// Get all users with optional filtering by role and search by name
export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const { role, q } = req.query;

    // Build a query object based on the query parameters
    const query: any = {};
    if (role) {
      query.role = role;
    }
    if (q) {
      query.name = { $regex: q, $options: 'i' }; // Case-insensitive search by name
    }

    const users = await getAllUsers(query);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};
