import bcrypt from 'bcrypt';
import { User } from '../models/index.js';

const authConfig = {
  authenticate: async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user) return null;
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return null;
    return { id: user.id, email: user.email, role: user.role, name: user.name };
  },
  cookiePassword: process.env.COOKIE_SECRET,
};

export default authConfig;