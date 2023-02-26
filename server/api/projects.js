const projectsRouter = require('express').Router();
const { Project } = require('../db');

projectsRouter.get('/', async (req, res, next) => {
  try {
    const allProjects = await Project.findAll();
    res.status(200).send(allProjects);
  } catch (error) {
    next(error);
  }
});

module.exports = projectsRouter;
