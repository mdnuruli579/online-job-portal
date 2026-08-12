import { addCompanyService } from './company.service.js';
export const addCompanyController = async (req, res) => {
  const logo = req.file;
  const data = req?.body?.data;
  const user_id = req.user.id;
  return res.json(await addCompanyService(user_id, logo, JSON.parse(data)));
}