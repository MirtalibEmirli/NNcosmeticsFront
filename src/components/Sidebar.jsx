import { NavLink } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Categories', path: '/categories' },
  { name: 'Brands', path: '/brands' },
  { name: 'Sellers', path: '/sellers' },
  { name: 'Products', path: '/products' },
  { name: 'ProductsForm', path: '/productsform' },
  { name: 'Return Requests', path: '/returns' },
  { name: 'StatisticsPage', path: '/statisticspage' }
];

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-purple-100 p-6">
      <h1 className="text-2xl font-bold mb-8 text-purple-800">NNcosmetics</h1>
      <nav className="flex flex-col space-y-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium text-left ${
                isActive ? 'bg-purple-300 text-purple-900' : 'text-purple-700 hover:bg-purple-200'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
