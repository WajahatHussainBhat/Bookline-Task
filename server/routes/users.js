import express from 'express';
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

router.post('/', async (req, res) => {
    const { userId, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);

    try {
        const newUser = new User({ userId, password: hashedPassword, expiryDate });
        await newUser.save();
        res.status(201).send('User added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

export default router;