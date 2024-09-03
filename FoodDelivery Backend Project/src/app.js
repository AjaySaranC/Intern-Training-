const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const { passport } = require('./config/passport');
const restaurantRoutes = require('./routes/restaurantRoutes');
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());


app.use('/api', userRoutes);
app.use('/api', restaurantRoutes);
app.use('/api', foodRoutes);
app.use('/api', orderRoutes);


app.get('/', (req, res) => {
  res.send('Food Delivery API');
});

sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
}).catch((error) => {
  console.error('Error synchronizing database:', error);
});

require('./jobs/cron');

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




