import MassageType from '../models/massageTypeModel';

export const createMassageType = async (massageData: any) => {
  const massageType = new MassageType(massageData);
  return await massageType.save();
};

export const getMassageTypeById = async (id: string) => {
  return await MassageType.findById(id);
};

export const updateMassageType = async (id: string, updateData: any) => {
  return await MassageType.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteMassageType = async (id: string) => {
  return await MassageType.findByIdAndDelete(id);
};

export const getAllMassageTypes = async () => {
  return await MassageType.find();
};

// Search function to find massages by name or price
export const searchMassageTypes = async (query: string) => {
  return await MassageType.find({
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { price: { $regex: query, $options: 'i' } }
    ]
  });
};
