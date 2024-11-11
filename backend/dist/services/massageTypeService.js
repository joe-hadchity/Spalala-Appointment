"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMassageTypes = exports.getAllMassageTypes = exports.deleteMassageType = exports.updateMassageType = exports.getMassageTypeById = exports.createMassageType = void 0;
const massageTypeModel_1 = __importDefault(require("../models/massageTypeModel"));
const createMassageType = async (massageData) => {
    const massageType = new massageTypeModel_1.default(massageData);
    return await massageType.save();
};
exports.createMassageType = createMassageType;
const getMassageTypeById = async (id) => {
    return await massageTypeModel_1.default.findById(id);
};
exports.getMassageTypeById = getMassageTypeById;
const updateMassageType = async (id, updateData) => {
    return await massageTypeModel_1.default.findByIdAndUpdate(id, updateData, { new: true });
};
exports.updateMassageType = updateMassageType;
const deleteMassageType = async (id) => {
    return await massageTypeModel_1.default.findByIdAndDelete(id);
};
exports.deleteMassageType = deleteMassageType;
const getAllMassageTypes = async () => {
    return await massageTypeModel_1.default.find();
};
exports.getAllMassageTypes = getAllMassageTypes;
// Search function to find massages by name or price
const searchMassageTypes = async (query) => {
    return await massageTypeModel_1.default.find({
        $or: [
            { name: { $regex: query, $options: 'i' } },
            { price: { $regex: query, $options: 'i' } }
        ]
    });
};
exports.searchMassageTypes = searchMassageTypes;
