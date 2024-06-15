import express from 'express';
import Student from "../models/Student.js"

const router = express.Router();

router.post("/", async (req, res) => {
    const {studentId, name, dateOfBirth} = req.body;

    try {
        const newStudent = new Student({ studentId, name, dateOfBirth });
        await newStudent.save();
        res.status(201).send('Student added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

export default router;