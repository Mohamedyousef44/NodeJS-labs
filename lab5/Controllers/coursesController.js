
const validate = require('../Utils/courseValidation');
const crsModel = require('../Model/coursesModel')


let getAll = async(req , res)=>{

    let data =  await crsModel.find({});
    await res.json(data);

}


let getOneById = async(req , res)=>{

    var ID = req.params.id ; 
    let data =  await crsModel.find({id : ID});
    await res.json(data);

}

let createOne = async(req , res)=>{

    let data = req.body;
    const valid = validate(data)

    if (!valid) console.log(validate.errors)

    else {

        let newCrs =  new crsModel(data);
        await newCrs.save();
        await res.json(newCrs);
        
    }  
}

let updateOneById = async(req , res)=>{

    var ID = req.params.id ;
    let data = req.body;
    console.log(data)
    const valid = validate(data)

    if (!valid) console.log(validate.errors)

    else {

        data = await crsModel.updateOne( {id: ID} , data );
        await res.json(data);
        
    }  
} 


let deleteOneById = async(req , res)=>{

    var ID = req.params.id ; 
    let data =  await crsModel.deleteOne({id : ID});
    await res.json(data);

}



module.exports = {
    getAll ,
    getOneById ,
    createOne ,
    updateOneById ,
    deleteOneById
}