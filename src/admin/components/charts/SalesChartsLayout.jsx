import { Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { SellerSalesChart } from './SellerSalesChart';
import { DateSalesChart } from './DateSalesChart';
import { PaymentChart } from './PaymentChart';

export default function SalesChartsLayout() {
  return (
    <Grid container spacing={3} className="mt-16     ">
      {/* Satıcıya görə satış */}
      <Grid item xs={12} className="ml-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileHover={{ scale: 1.02 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper className="p-6 rounded-xl shadow-md w-full">
            <Typography className="text-xl sm:text-2xl font-semibold text-purple-800 mb-4">
              Satıcıya görə satış
            </Typography>
            <div className="w-full h-[300px] sm:h-[400px]">
              <SellerSalesChart />
            </div>
          </Paper>
        </motion.div>
      </Grid>

      {/* Tarixə görə satış */}
      
      {/* Ödəniş növü */}
      <Grid item xs={12} className="ml-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileHover={{ scale: 1.02 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Paper className="p-6 rounded-xl shadow-md w-full">
            <Typography className="text-xl sm:text-2xl font-semibold text-purple-800 mb-4">
              Ödəniş növü üzrə satışlar
            </Typography>
            <div className="w-full h-[300px] sm:h-[400px]">
              <PaymentChart />
            </div>
          </Paper>
        </motion.div>
      </Grid>
      <Grid item xs={12}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileHover={{ scale: 1.02 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper className="p-6 rounded-xl shadow-md w-full">
            <Typography className="text-xl sm:text-2xl font-semibold text-purple-800 mb-4">
              Tarixə görə satış
            </Typography>
            <div className="w-full h-[300px] sm:h-[400px]">
              <DateSalesChart />
            </div>
          </Paper>
        </motion.div>
      </Grid>

    </Grid>
  );
}