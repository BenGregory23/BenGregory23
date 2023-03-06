

const { Project } = require('../model/model');
const Model = Project;
// Post a project
const createProject = async (req, res) => {
    console.log(req.body);
    const project = new Model({
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        image: req.body.image,
        imageType: req.body.imageType
    })
    try {
        const newProject = await project.save()
        return newProject;
    } catch (err) {
        return err;
    }
}

// Get all projects
const getProjects = async (req, res) => {
    try {
        const projects = await Model.find()
        return projects;
    } catch (err) {
        console.log(err);
        return err;
    }
}

// Get a project
const getProject = async (req, res) => {
        const project = await Model.findById(req.params.id)
        if (project == null) {
            return project;
        }
        else {
            return null;
        }
    
}

// Update a project
const updateProject = async (req, res) => {
    try {
        const project = await Model.findById(req.params.id)
        if (project == null) {
            return res.status(404).json({ message: 'Cannot find project' })
        }
        if (req.body.title != null) {
            project.title = req.body.title
        }
        if (req.body.description != null) {
            project.description = req.body.description
        }
        if (req.body.link != null) {
            project.link = req.body.link
        }
        if (req.body.image != null) {
            project.image = req.body.image
        }
        if (req.body.imageType != null) {
            project.imageType = req.body.imageType
        }
        const updatedProject = await project.save()
        res.json(updatedProject)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// Delete a project
const deleteProject = async (req, res) => {
    try {
        const project = await Model.findById(req.params.id)
        if (project == null) {
            return res.status(404).json({ message: 'Cannot find project' })
        }
        await project.remove()
        res.json({ message: 'Deleted project' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports = {
    createProject,
    getProjects,
    getProject,
    updateProject,
    deleteProject
}

