import 'dotenv/config';
import express from 'express';
import AdminJSExpress from '@adminjs/express';
import { sequelize } from './src/models/index.js';
import adminJs from './src/admin/index.js';
import authConfig from './src/admin/auth.js';
import authRouter from './src/routes/auth.js';

const app = express();
app.use(express.json());

// API routes
app.use('/api', authRouter);

// AdminJS router (session-based)
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, authConfig, null, {
  resave: false,
  saveUninitialized: true,
  secret: process.env.COOKIE_SECRET,
});
app.use(adminJs.options.rootPath, adminRouter);

// Sync DB and start
const PORT = process.env.PORT || 3000;
sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`AdminJS at http://localhost:${PORT}/admin`);
  });
});