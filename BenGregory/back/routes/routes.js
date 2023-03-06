const express = require('express');
const projectRepo = require('../repos/projectRepo');
const skillRepo = require('../repos/skillRepos');

const router = express.Router()

// Post a project 
router.post('/project', (req, res) => {
    console.log(req.body);
    projectRepo.createProject(req, res).then((result) => {
        if(result === null) {
            res.status(500).json({ message: err.message })
        }
        else {
            res.status(201).json(result)
        }
        
    })
    
})

// Get all projects
router.get('/projects', (req, res) => {
    projectRepo.getProjects(req, res).then((result) => {
        if(result === null) {
            res.status(500).json({ message: err.message })
        }
        else {
            res.status(200).json(result)
        }
    })
})

// Get a project
router.get('/project/:id', (req, res) => {
    projectRepo.getProject(req, res);
    res.send('Get a project')
})

// Update a project
router.patch('/project/:id', (req, res) => {
    projectRepo.updateProject(req, res);
    res.send('Update a project')
})

// Delete a project
router.delete('/project/:id', (req, res) => {
    projectRepo.deleteProject(req, res);
    res.send('Delete a project')
})



router.get('/skills', (req, res) => {
    const skills = skillRepo.getSkills(req, res).then((result) => {
        if(result === null) {
            res.status(500).json({ message: err.message })
        }
        else {
            console.log(result);
            res.status(200).json(result)
        }
    })
})

module.exports = router;