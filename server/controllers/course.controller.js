const { Course } = require("../models/course.model.js");
const { Teacher } = require("../models/teacher.model.js");

module.exports.getAll = async function (req, res) {
  try {
    console.log(req.params.name);
    const tt = await Teacher.findOne({ where: { name: req.params.name } });
    console.log(tt.id);
    const all = await Course.findAll({ where: { teacherId: tt.id} });
    res.json(all);
  } catch (error) {
    throw error;
  }
};

module.exports.add = async function (req, res) {
  try {
    const tt = await Teacher.findOne({ where: { name: req.params.name } });
    const added = await Course.create({ name:req.body.name,link:req.body.link, teacherId: tt.id });
    res.json(added);
  } catch (error) {
    throw error;
  }
};

module.exports.del = async function (req, res) {
  try {
    const tid = await Teacher.findOne({ where: { name: req.params.name } });
    console.log(tid);
    const dl = await Course.destroy({ where: { id: req.params.id ,teacherId:tid.id} });
    res.json(dl);
  } catch (error) {
    throw error;
  }
};
