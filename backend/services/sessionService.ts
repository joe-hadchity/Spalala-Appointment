import Session from '../models/sessionModel';

export const createSession = async (sessionData: any) => {
  const session = new Session(sessionData);
  return await session.save();
};

export const getSessionById = async (id: string) => {
  return await Session.findById(id).populate('appointment');
};

export const updateSession = async (id: string, updateData: any) => {
  return await Session.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteSession = async (id: string) => {
  return await Session.findByIdAndDelete(id);
};

export const getAllSessions = async () => {
  return await Session.find().populate('appointment');
};

// Search sessions by date or status
export const searchSessions = async (query: string) => {
  return await Session.find({
    $or: [
      { status: { $regex: query, $options: 'i' } },
      { startTime: { $regex: query, $options: 'i' } }
    ]
  }).populate('appointment');
};
