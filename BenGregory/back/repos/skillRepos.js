const {Skill } = require('../model/model.js');
const Model = Skill;

// Post
const postSkill = async (req, res) => {
    console.log(req.body);
    const skill = new Model({
        title: req.body.title,
        description: req.body.description,
        chips: req.body.chips
    })


    try {
        const newSkill = await skill.save()
        return newSkill;
    } catch (err) {
        return err;
    }
}


// Get all skills
const getSkills = async (req, res) => {
    try {
        const skills = await Model.find()
        return skills;
    } catch (err) {
        console.log(err);
        return err;
    }
}

// Get a skill
const getSkill = async (req, res) => {
    const skill = await Model.findById(req.params.id)
    if (skill == null) {
        return skill;
    }
    else {
        return null;
    }

}

// Update a skill
const updateSkill = async (req, res) => {
    try {
        const skill = await Model.findById(req.params.id)
        if (skill == null) {
            return res.status(404).json({ message: 'Cannot find skill' })
        }
        if (req.body.title != null) {
            skill.title = req.body.title
        }
        if (req.body.description != null) {
            skill.description = req.body.description
        }
        if (req.body.chips != null) {
            skill.chips = req.body.chips
        }
        const updatedSkill = await skill.save()
        return updatedSkill;
    } catch (err) {
        return err;
    }
}

// Delete a skill
const deleteSkill = async (req, res) => {
    const skill = await Model.findById(req.params.id)
    if (skill == null) {
        return null;
    }
    else {
        try {
            await skill.remove()
            return skill;
        } catch (err) {
            return err;
        }
    }
}


module.exports = { getSkills, getSkill, updateSkill, deleteSkill }