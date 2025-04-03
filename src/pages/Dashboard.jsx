import {
  Box,
  Grid,
  Paper,
  Typography,
  Avatar,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import SalesChart from "../components/SalesChart"; // yuxarı hissəyə əlavə et

const stats = [
  { label: "Total Sales", value: "$1.250", icon: "💰" },
  { label: "Best Sellers", value: "Cleansing Foam", icon: "✨" },
  { label: "Active Sellers", value: "5", icon: "🧑‍💼" },
  { label: "Return Requests", value: "2", icon: "↩️" },
];

const topProducts = [
  {
    name: "Purifying Cleanser",
    category: "Simihare",
    sales: 120,
    image: "https://m.media-amazon.com/images/I/51hRtEovKVL.jpg",
  },
  {
    name: "Lipstick",
    category: "Brand B",
    sales: 95,
    image:
      "https://sdcdn.io/mac/gb/mac_sku_M0N904_1x1_0.png?width=1440&height=1440",
  },
  {
    name: "Hair Oil",
    category: "Brand C",
    sales: 78,
    image:
      "https://media.buywow.in/public/348510d6-7a3c-4b44-b825-4b9f55136bbc?w=480&q=75&f=webp",
  },
  {
    name: "Eyeshadow Palette",
    category: "Brand D",
    sales: 65,
    image:
      "data:image/jpeg;base64,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",
  },
];

const productList = [
  {
    name: "Hydrating Serum",
    category: "Skincare",
    brand: "Brand A",
    price: "$20.00",
    stock: "In stock",
    quantity: 12,
  },
  {
    name: "Foundation",
    category: "Makeup",
    brand: "Brand B",
    price: "$20.00",
    stock: "In stock",
    quantity: 12,
  },
  {
    name: "Shampoo",
    category: "Hair Care",
    brand: "Brand C",
    price: "$25.00",
    stock: "Out",
    quantity: 12,
  },
  {
    name: "Earrings",
    category: "Jewelry",
    brand: "Brand D",
    price: "$20.00",
    stock: "In stock",
    quantity: 10,
  },
];

export default function Dashboard() {
  return (
    <Box className="space-y-8 font-[Poppins] text-gray-800">
      {/* Header Cards */}
      <Grid container spacing={3}>
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper className="p-5 shadow-sm bg-white rounded-xl border border-purple-100">
              <Typography
                variant="subtitle2"
                className="text-gray-500 flex items-center gap-2"
              >
                <span className="text-lg">{item.icon}</span> {item.label}
              </Typography>
              <Typography
                variant="h5"
                className="text-purple-700 font-semibold mt-2"
              >
                {item.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Chart Area */}
      {/* Chart Area */}
      <Paper className="p-6 bg-white border border-purple-100 shadow rounded-xl">
        <Typography variant="h6" className="text-purple-900 mb-4 font-semibold">
          Sales Overview
        </Typography>
        <Box className="h-[300px]">
          <SalesChart />
        </Box>
      </Paper>

      {/* Top Products */}
      <Paper className="p-6 bg-white shadow-sm rounded-xl">
        <Typography
          variant="h6"
          className="mb-4 font-bold text-purple-900 text-lg"
        >
          Top Products
        </Typography>
        <Box className="space-y-4">
          {topProducts.map((prod, idx) => (
            <Box key={idx} className="flex items-center justify-between">
              <Box className="flex items-center gap-4">
                <Avatar
                  src={prod.image}
                  alt={prod.name}
                  variant="rounded"
                  sx={{ width: 48, height: 48, borderRadius: 2 }}
                />
                <Box>
                  <Typography className="font-semibold text-base">
                    {prod.name}
                  </Typography>
                  <Typography className="text-gray-500 text-sm">
                    {prod.category}
                  </Typography>
                </Box>
              </Box>
              <Typography className="text-purple-700 text-lg font-bold">
                {prod.sales}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Product Table */}
      <Paper className="p-6 bg-white shadow-sm rounded-xl">
        <Typography variant="h6" className="mb-4 font-semibold text-purple-900">
          Product List
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Category</b>
              </TableCell>
              <TableCell>
                <b>Brand</b>
              </TableCell>
              <TableCell>
                <b>Price</b>
              </TableCell>
              <TableCell>
                <b>Stock</b>
              </TableCell>
              <TableCell>
                <b>In Stock</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((p, i) => (
              <TableRow key={i} className="text-base">
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell>{p.brand}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>
                  {p.stock}{" "}
                  <span className="text-gray-500 text-sm ml-1">
                    ({p.quantity})
                  </span>
                </TableCell>
                <TableCell>
                  {p.quantity > 0 ? (
                    <span className="text-purple-600 font-bold text-lg">
                      ✔️
                    </span>
                  ) : (
                    <span className="text-red-400 text-lg">✖️</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
