import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    className: { type: String, required: true },
    year: { type: Number, required: true },
    classTeacher: { type: String, required: true },
    subjectList: [String],
    students: [{
        roll: String,
        studentId: String,
        marks: Object
    }]
});

export default mongoose.model('Class', classSchema);