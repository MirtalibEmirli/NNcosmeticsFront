import { NavLink } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', path: '/admin/dashboard' },
  { name: 'Categories', path: '/admin/categories' },
  { name: 'Brands', path: '/admin/brands' },
  { name: 'Sellers', path: '/admin/sellers' },
  { name: 'Products', path: '/admin/products' },
  { name: 'Products Form', path: '/admin/productsform' },
  { name: 'Return Requests', path: '/admin/returns' },
  { name: 'Statistics', path: '/admin/statisticspage' },
  { name: 'AddSeller', path: '/admin/addseller' },
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
              `px-4 py-2 rounded-lg font-medium text-left transition-all duration-200 ${
                isActive
                  ? 'bg-purple-300 text-purple-900'
                  : 'text-purple-700 hover:bg-purple-200'
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
