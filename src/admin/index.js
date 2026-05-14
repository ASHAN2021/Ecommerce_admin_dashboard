import AdminJS, { ComponentLoader } from 'adminjs';
import AdminJSSequelize from '@adminjs/sequelize';
import { fileURLToPath } from 'url';
import path from 'path';
import { User, Category, Product, Order, OrderItem, Setting } from '../models/index.js';
import userRes from './resources/UserResources.js';
import settingRes from './resources/SettingeResources.js';
import productRes from './resources/ProductResources.js';
import orderRes from './resources/OrderResources.js';
import orderItemRes from './resources/OrderItemResources.js';
import categoryRes from './resources/CategoryResources.js';

AdminJS.registerAdapter(AdminJSSequelize);

// ← Build absolute path for current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const componentLoader = new ComponentLoader();

const DashboardComponent = componentLoader.add(
  'Dashboard',
  path.join(__dirname, './components/Dashboard')  // ← absolute path
);

const adminJs = new AdminJS({
  componentLoader,
  resources: [
    { resource: User,      options: userRes.options },
    { resource: Category,  options: categoryRes.options },
    { resource: Product,   options: productRes.options },
    { resource: Order,     options: orderRes.options },
    { resource: OrderItem,   options: orderItemRes.options },
    { resource: Setting,   options: settingRes.options },
  ],
  dashboard: {
    handler: async (req) => {
      const totalUsers    = await User.count();
      const totalOrders   = await Order.count();
      const totalProducts = await Product.count();
      return { totalUsers, totalOrders, totalProducts };
    },
    component: DashboardComponent,
  },
  rootPath: '/admin',
  branding: { companyName: 'eCommerce Admin' },
});

export default adminJs;