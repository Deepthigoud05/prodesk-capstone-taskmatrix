import Task from "../models/Task.js";

// Create Task
export const createTask = async (req, res) => {
  try {

    const task = await Task.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Get Tasks
export const getTasks = async (req, res) => {
  try {

    const tasks = await Task.find({
      createdBy: req.user.id,
    });

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Update Task
export const updateTask = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (task.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not allowed to update this task",
      });
    }

    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.status = req.body.status || task.status;
    task.priority = req.body.priority || task.priority;
    task.dueDate = req.body.dueDate || task.dueDate;

    await task.save();

    res.json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Delete Task
export const deleteTask = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (task.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not allowed to delete this task",
      });
    }

    await task.deleteOne();

    res.json({
      message: "Task Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};