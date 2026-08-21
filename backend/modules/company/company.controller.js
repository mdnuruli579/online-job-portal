import { addCompanyService,getCompanyByUserIdService } from './company.service.js';
export const addCompanyController = async (req, res) => {
  const logo = req.file;
  const data = req?.body?.data;
  const user_id = req.user.id;
  const role = req.user.role;
  return res.json(await addCompanyService(user_id, logo, JSON.parse(data), role));
}
export const getCompanyByUserIdController = async (
  req,
  res
) => {

  try {

    const user_id = req.user.id;
    const role = req.user.role;

    const result =
      await getCompanyByUserIdService(
        user_id,
        role
      );

    return res
      .status(result.statusCode)
      .json(result);

  } catch (error) {

    return res.status(500).json({
      message: error.message,
      statusCode: 500,
    });

  }
};