const {Teacher} = require("../models/teacher.model")



module.exports.getAll = async function(req,res){
    try{
        const all=await Teacher.findAll()
        res.json(all)
    } catch(error){
        throw error
    }
}

module.exports.add = async function(req,res){
    try{
        const added = await Teacher.create({...req.body})
        // console.log(added);
        res.json(added)
    } catch(error){
        throw error
    }
}


module.exports.getOne = async function(req,res){
    try{
        const one= await Teacher.findOne({where:{name:req.params.name}})
        // console.log(one);
        res.json(one)
    } catch(error){
        throw error
    }
}


module.exports.del = async function(req,res){
    try{
        const dl= await Teacher.destroy({where:{name: req.params.name}})
        res.json(dl)
    } catch(error) {
        throw error
    }
}


module.exports.getOneId = async function(req,res){
    try{
        const one = await Teacher.findOne({where:{id:req.params.id}})
        res.json(one)
    } catch(error){
        throw error
    }
}