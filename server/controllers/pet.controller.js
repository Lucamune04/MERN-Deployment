const {Pet} =require('../models/pet.model')
module.exports.getAll=(req,res) =>{
        Pet.find().collation({locale:"en"}).sort("type")
        .then(i=> res.json(i))
        .catch(err=>res.json(err))
    }		
module.exports.create=(req,res)=>{
    Pet.create(req.body)
        .then(i => res.json(i))
        .catch(err => res.status(400).json(err))
}

module.exports.getOne=(req,res)=>{
    Pet.findById(req.params.id)
        .then(i=>res.json(i))
        .catch(err => res.json(err))
}

module.exports.update=(req,res)=>{

Pet.findByIdAndUpdate(
        req.params.id,
        {
                name: req.body.name,
                type:req.body.type,
                description:req.body.description,
                skill1:req.body.skill1,
                skill2:req.body.skill2,
                skill3:req.body.skill3,
                
        },
        {
                new: true,
                runValidators: true
        }
    )
        .then(product=> res.json(product))
        .catch(err => res.status(400).json(err))
}

module.exports.delete=(req,res)=>{
    Pet.findByIdAndDelete(req.params.id)
        .then(()=>req.json({message:"success"}))
        .catch(err=>res.json(err))
}