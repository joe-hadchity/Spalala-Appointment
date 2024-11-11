"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchForMassageTypes = exports.getAllMassageTypesController = exports.deleteMassageTypeById = exports.updateMassageTypeById = exports.getMassageType = exports.createNewMassageType = void 0;
const massageTypeService_1 = require("../services/massageTypeService");
// Create a new massage type
const createNewMassageType = async (req, res) => {
    try {
        const massageType = await (0, massageTypeService_1.createMassageType)(req.body);
        res.status(201).json(massageType);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating massage type', error });
    }
};
exports.createNewMassageType = createNewMassageType;
// Get a massage type by ID
const getMassageType = async (req, res) => {
    try {
        const massageType = await (0, massageTypeService_1.getMassageTypeById)(req.params.id);
        res.status(200).json(massageType);
    }
    catch (error) {
        res.status(404).json({ message: 'Massage type not found', error });
    }
};
exports.getMassageType = getMassageType;
// Update a massage type by ID
const updateMassageTypeById = async (req, res) => {
    try {
        const updatedMassageType = await (0, massageTypeService_1.updateMassageType)(req.params.id, req.body);
        res.status(200).json(updatedMassageType);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating massage type', error });
    }
};
exports.updateMassageTypeById = updateMassageTypeById;
// Delete a massage type by ID
const deleteMassageTypeById = async (req, res) => {
    try {
        await (0, massageTypeService_1.deleteMassageType)(req.params.id);
        res.status(204).json({ message: 'Massage type deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting massage type', error });
    }
};
exports.deleteMassageTypeById = deleteMassageTypeById;
// Get all massage types
const getAllMassageTypesController = async (req, res) => {
    try {
        const massageTypes = await (0, massageTypeService_1.getAllMassageTypes)();
        res.status(200).json(massageTypes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching massage types', error });
    }
};
exports.getAllMassageTypesController = getAllMassageTypesController;
// Search massage types by name or price
const searchForMassageTypes = async (req, res) => {
    try {
        const massageTypes = await (0, massageTypeService_1.searchMassageTypes)(req.query.q);
        res.status(200).json(massageTypes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error searching for massage types', error });
    }
};
exports.searchForMassageTypes = searchForMassageTypes;
