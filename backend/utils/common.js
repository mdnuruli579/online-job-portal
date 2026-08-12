import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import multer from 'multer';
import {v2 as cloudinary} from 'cloudinary';
import { API_URL, 
  CLOUDINARY_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  EMAIL_USER, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, SECREATE_KEY } from '../config/env.js';
export const generateToken = ({ id, email, role }) => {
    const token = jwt.sign({ id, role, email }, SECREATE_KEY, { expiresIn: '15m' });
    return token;
}
export const upload=multer({storage:multer.memoryStorage()});
//configuration of cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
})
export const uploadcloudinary = cloudinary;
export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: EMAIL_USER,
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        refreshToken: GOOGLE_REFRESH_TOKEN,
    },
});

export const sendUserMail = async (email,token) => {
    const verificationLink=`${API_URL}/user/verify-email?token=${token}`;
    return await transporter.sendMail({
        from: `"MyAnatomy AI <no-reply>" <${EMAIL_USER}>`,
        to: email,
        subject: "Verify Your Email Address",
        html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <title>Email Verification</title>
    </head>
    <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0"
              style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 3px 10px rgba(0,0,0,0.1);">

              <tr>
                <td align="center"
                  style="background:#2563eb;padding:25px;color:#ffffff;font-size:28px;font-weight:bold;">
                  MyAnatomy AI
                </td>
              </tr>

              <tr>
                <td style="padding:40px;color:#333;">
                  <h2 style="margin-top:0;">Verify Your Email</h2>

                  <p>Hello,</p>

                  <p>
                    Thank you for creating your account.
                    Please verify your email address to activate your account.
                  </p>

                  <div style="text-align:center;margin:35px 0;">
                    <a href="${verificationLink}"
                      style="
                        background:#2563eb;
                        color:#ffffff;
                        text-decoration:none;
                        padding:15px 35px;
                        border-radius:6px;
                        display:inline-block;
                        font-size:16px;
                        font-weight:bold;">
                      Verify Email
                    </a>
                  </div>

                  <p>
                    Or copy and paste this link into your browser:
                  </p>

                  <p style="word-break:break-all;color:#2563eb;">
                    ${verificationLink}
                  </p>

                  <p>
                    This verification link will expire in
                    <strong>15 minutes</strong>.
                  </p>

                  <hr style="border:none;border-top:1px solid #eee;margin:30px 0;" />

                  <p style="font-size:13px;color:#666;">
                    If you didn't create an account, you can safely ignore this email.
                  </p>
                </td>
              </tr>

              <tr>
                <td align="center"
                  style="background:#f8f8f8;padding:20px;font-size:12px;color:#777;">
                  © ${new Date().getFullYear()} MyAnatomy AI. All rights reserved.
                  <br><br>
                  This is an automated email. Please do not reply.
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `,
    });
}
export const verifyToken=async(token)=>{
  return jwt.verify(token,SECREATE_KEY);
}