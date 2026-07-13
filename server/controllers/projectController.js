import Project from "../models/Project.js";

// Create Project
export const createProject = async (req, res) => {
  try {
    const project = await Project.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(project);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Get Projects
export const getProjects = async (req, res) => {

  try {

    const projects = await Project.find({
      createdBy: req.user.id,
    });

    res.json(projects);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// Update Project
export const updateProject = async (req, res) => {

  try {

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(project);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// Delete Project
export const deleteProject = async (req, res) => {

  try {

    await Project.findByIdAndDelete(req.params.id);

    res.json({
      message: "Project Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};