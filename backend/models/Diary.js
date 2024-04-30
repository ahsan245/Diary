const mongoose = require('mongoose');

const DiaryScema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const Diary = mongoose.model('diary', DiaryScema);
module.exports = Diary;