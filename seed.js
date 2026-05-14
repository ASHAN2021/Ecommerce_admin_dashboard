import 'dotenv/config';
import bcrypt from 'bcrypt';
import { sequelize, User } from './src/models/index.js';

async function seed() {
  await sequelize.sync({ alter: true });

  await User.findOrCreate({
    where: { email: 'admin@example.com' },
    defaults: { name: 'Super Admin', password: 'admin123', role: 'admin' },
  });

  await User.findOrCreate({
    where: { email: 'user@example.com' },
    defaults: { name: 'Regular User', password: 'user123', role: 'user' },
  });

  console.log('Seeded: admin@example.com / admin123 and user@example.com / user123');
  process.exit(0);
}
seed();