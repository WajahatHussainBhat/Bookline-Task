import express from 'express';
import Class from "../models/Class.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const { subject, className, year } = req.query;

    try {
        const classData = await Class.findOne({ className, year });

        if (!classData) {
            return res.status(404).send('Class not found');
        }

        const scores = classData.students.map(student => ({
            roll: student.roll,
            studentId: student.studentId,
            score: student.marks[subject]
        })).filter(student => student.score !== undefined);

        res.status(200).json(scores);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

export default router;