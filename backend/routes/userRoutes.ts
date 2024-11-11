import { Router } from 'express';
import { registerUser, getUser, updateUserById, deleteUserById, getAllUsersController} from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.get('/:id', getUser);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);
router.get('/', getAllUsersController);

export default router;
