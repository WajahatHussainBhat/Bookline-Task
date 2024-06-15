import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import classRoutes from "./routes/class.js"
import userRoutes from "./routes/users.js"
import studentRoutes from "./routes/student.js"
import scoreRoutes from "./routes/score.js"

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is a bookline API")
})

app.use('/api/classes', classRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/scores', scoreRoutes);

const PORT = 3000
const DATABASE_URL = "mongodb+srv://wajahathussainbhat:WQRKPeEfVrJattWG@cluster0.sahusp5.mongodb.net/"

mongoose.connect(DATABASE_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((err) => console.log(err.message));