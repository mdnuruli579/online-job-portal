import express from 'express'
import dotenv from 'dotenv';
import connectDB, { sequelize } from './config/db.js';
import mainRoute from './routes/mainRoute.js';
import './models/index.js';
dotenv.config();
const app = express();
const PORT = 8080;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use("/api", mainRoute);

app.listen(PORT, async() => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
  await sequelize.sync();
});

export default app;
