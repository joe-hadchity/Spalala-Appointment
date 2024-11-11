import User from '../models/userModel';
import IUser  from '../models/userModel';

export const createUser = async (userData: any) => {
  const user = new User(userData);
  return await user.save();
};

export const getUserById = async (id: string) => {
  return await User.findById(id).populate('appointments');
};

export const updateUser = async (id: string, updateData: Partial<any>) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteUser = async (id: string) => {
  return await User.findByIdAndDelete(id);
};

export const getAllUsers = async (query: any) => {
  return await User.find(query).exec();
};

// Search function to find users by name or email
export const searchUsers = async (query: string) => {
  return await User.find({
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { email: { $regex: query, $options: 'i' } }
    ]
  });
};
