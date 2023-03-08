let stdModel = require("../Model/studentsModel");
var validate = require("../Utils/studentsValidation")


let getAllStds = async(req , res)=>{

    var alldata = await stdModel.find({});
    await res.json(alldata)

}

let getOneById = async(req , res)=>{

    var ID = req.params.id ;
    var data = await stdModel.find({id : ID });
    await res.json(data)

}

let createOne = async(req , res)=>{

    var data = req.body ; 
    const valid = validate(data)

    if (!valid) console.log(validate.errors)

    else {

        var newStd = new stdModel(data);
        await newStd.save();
        await res.json(newStd);

    }   
}

let deleteOne = async(req , res)=>{

    var ID = req.params.id ;
    var data = await stdModel.deleteOne({id : ID });
    await res.json(data)

}

let updateOne = async(req , res)=>{

    var ID = req.params.id;
    var data = req.body;
    console.log(data)
    const valid = validate(data)

    if (!valid) console.log(validate.errors)

    else {

        data = await stdModel.updateOne({id : ID } , data );
        // await data.save();
        await res.json(data);

    }  
    

}

 


module.exports = {

    getAllStds,
    createOne,
    getOneById,
    deleteOne,
    updateOne

}