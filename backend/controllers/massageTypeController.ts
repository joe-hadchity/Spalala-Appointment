import { Request, Response } from 'express';
import { createMassageType, getMassageTypeById, updateMassageType, deleteMassageType, searchMassageTypes, getAllMassageTypes } from '../services/massageTypeService';

// Create a new massage type
export const createNewMassageType = async (req: Request, res: Response) => {
  try {
    const massageType = await createMassageType(req.body);
    res.status(201).json(massageType);
  } catch (error) {
    res.status(500).json({ message: 'Error creating massage type', error });
  }
};

// Get a massage type by ID
export const getMassageType = async (req: Request, res: Response) => {
  try {
    const massageType = await getMassageTypeById(req.params.id);
    res.status(200).json(massageType);
  } catch (error) {
    res.status(404).json({ message: 'Massage type not found', error });
  }
};

// Update a massage type by ID
export const updateMassageTypeById = async (req: Request, res: Response) => {
  try {
    const updatedMassageType = await updateMassageType(req.params.id, req.body);
    res.status(200).json(updatedMassageType);
  } catch (error) {
    res.status(500).json({ message: 'Error updating massage type', error });
  }
};

// Delete a massage type by ID
export const deleteMassageTypeById = async (req: Request, res: Response) => {
  try {
    await deleteMassageType(req.params.id);
    res.status(204).json({ message: 'Massage type deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting massage type', error });
  }
};

// Get all massage types
export const getAllMassageTypesController = async (req: Request, res: Response) => {
  try {
    const massageTypes = await getAllMassageTypes();
    res.status(200).json(massageTypes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching massage types', error });
  }
};

// Search massage types by name or price
export const searchForMassageTypes = async (req: Request, res: Response) => {
  try {
    const massageTypes = await searchMassageTypes(req.query.q as string);
    res.status(200).json(massageTypes);
  } catch (error) {
    res.status(500).json({ message: 'Error searching for massage types', error });
  }
};
