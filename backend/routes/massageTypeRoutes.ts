import { Router } from 'express';
import { createNewMassageType, getMassageType, updateMassageTypeById, deleteMassageTypeById, getAllMassageTypesController, searchForMassageTypes } from '../controllers/massageTypeController';

const router = Router();

router.post('/', createNewMassageType);
router.get('/:id', getMassageType);
router.put('/:id', updateMassageTypeById);
router.delete('/:id', deleteMassageTypeById);
router.get('/', getAllMassageTypesController);
router.get('/search', searchForMassageTypes);

export default router;
