const {Student} = require("../models/student.model.js")


module.exports.getAll= async function(req,res){
    try {
        const all= await Student.findAll({where:{teacherId:req.params.id}})
        res.json(all)
    } catch(error) {
        throw error
    }
}


module.exports.add = async function(req,res){
    try {
        const added = await Student.create({...req.body})
        res.json(added)
    } catch(error) {
        throw error
    }
}


module.exports.del = async function(req,res){
    try{
        const dl = await Student.destroy({where:{name:req.params.name}})
        res.json(dl)
    } catch(error){
        throw error
    }
}


module.exports.getOne = async function (req,res){
    try{
        const one = await Student.findOne({where:{name:req.params.name}})
        res.json(one)
    } catch(error) {
        throw error
    }
}