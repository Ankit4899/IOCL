// import express from 'express';
import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routes
// import userRoutes from './routes/userRoutes.js';
// import projectRoutes from './routes/projectRoutes.js';
// const port = process.env.PORT;
// app.use('/api/users', userRoutes);
// app.use('/api/projects', projectRoutes);
// app.use('/api/news', require('./routes/news'));

// mongoose.connect(process.env.MONGO_URI).then(() => {
//     app.listen(port, () => console.log(`Server running on port ${port}`));
// });
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import newsRoutes from './routes/news.js'; // Don't forget the .js extension!
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/news', newsRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
