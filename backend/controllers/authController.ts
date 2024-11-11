import User from '../models/userModel';  // Assuming you have a User model
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Function to generate JWT token
const generateToken = (user: any) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  });
};

// Login function
export const loginUser = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken(user);
      res.status(200).json({ _id: user._id, email: user.email, role: user.role, token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Register function
export const registerUser = async (req: any, res: any) => {
  const { name, email, password } = req.body;
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate token
    const token = generateToken(user);

    res.status(201).json({ _id: user._id, email: user.email, role: user.role, token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
