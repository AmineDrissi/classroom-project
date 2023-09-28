const { Teacher } = require("../models/teacher.model.js");
const { Announcement } = require("../models/announcement.model.js");

module.exports.getAll = async function (req, res) {
  try {
    const tt = await Teacher.findOne({ where: { id: req.params.id } });
    const all = await Announcement.findAll({ where: { teacherId: tt.id } });
    res.json(all);
  } catch (error) {
    throw error;
  }
};

module.exports.add = async function (req, res) {
  try {
    const tt = await Teacher.findOne({ where: { id: req.params.id } });
    const added = await Announcement.create({ ...req.body, teacherId: tt.id });
    res.json(added);
  } catch (error) {
    throw error;
  }
};

module.exports.update = async function (req, res) {
  try {
    const up = await Announcement.update(
      { ...req.body },
      { where: { id: req.params.aId } }
    );
    res.json(up);
  } catch (error) {
    throw error;
  }
};

module.exports.del = async function (req, res) {
  try {
    // const tid = await Teacher.findOne({ where: { id: req.params.id } });
    const dl = await Announcement.destroy({ where: {id:req.params.aId} });
    res.json(dl);
  } catch (error) {
    throw error;
  }
};
