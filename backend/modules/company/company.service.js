import {response} from '../../utils/response.js';
import { Company, Recruiter } from '../../models/index.js';
import { uploadcloudinary } from '../../utils/common.js';
export const addCompanyService = async (user_id, logo, data) => {
  try {
    if (!logo) {
      return response("Logo is required", 400);
    }
    const { company_name, industry, company_size, company_website, about_company } = data;
    if (!company_name || !industry || !company_size || !company_website || !about_company) {
      return response("All feilds are mandatory", 400);
    }
    const uploadlogo = await new Promise((resolve, reject) => {
      const stream = uploadcloudinary.uploader.upload_stream(
        {
          folder: "companies"
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      stream.end(logo.buffer);
    });
    const company=await Company.create({
      company_name,
      industry,
      company_size,
      company_website,
      about_company,
      company_logo: uploadlogo.secure_url,
      public_key: uploadlogo.public_id
    });
    await Recruiter.create({
      recruiter_id: user_id,
      company_id: company.company_id
    });
    return response("Company Created successfully", 201);
  } catch (error) {
    return response(error.message, 500);
  }
}
