import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../models/userModel';

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const protect = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from the header
      token = req.headers.authorization.split(' ')[1];

      // Verify token and decode it
      const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as JwtPayload;

      // Find the user by decoded token's id and attach it to the request object
      req.user = await User.findById(decoded.id).select('-password');

      // Call the next middleware
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};
