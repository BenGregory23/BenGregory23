const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
    },
    // store an image in the database
    image: {
        type: Buffer,
        required: false
    },
    // store the image type
    imageType: {
        type: String,
        required: false
    },
})


const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    chips: {
        type: Array,
        required: false
    }
})

const Project = mongoose.model('Project', projectSchema);
const Skill = mongoose.model('Skill', skillSchema);

module.exports = { Project, Skill };
