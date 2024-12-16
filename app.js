const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const setupSwagger = require('./swagger');



dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Hello World :)",
    });
});
app.use('/books', bookRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));