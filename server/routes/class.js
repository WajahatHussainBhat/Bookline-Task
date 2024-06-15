import express from 'express';
import Class from "../models/Class.js"

const router = express.Router();

router.post('/', async (req, res) => {
    const { className, year, classTeacher, subjectList, students } = req.body;

    try {
        const existingClass = await Class.findOne({ className, year });

        if (existingClass) {
            existingClass.classTeacher = classTeacher;
            existingClass.subjectList = subjectList;
            existingClass.students = students;
            await existingClass.save();
        } else {
            const newClass = new Class({ className, year, classTeacher, subjectList, students });
            await newClass.save();
        }

        res.status(201).send('Class added/updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

export default router;
