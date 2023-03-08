const Ajv = require("ajv");
const ajv = new Ajv();

const StudentsSchema = {
    type:"object",
    properties:{

        id:{type : "number" , pattern:"^\d"},
        name:{type:"string", pattern:"^[a-zA-Z]+$"},
        age:{type:"number",minimum:20,maximum:28},
        department:{type:"string" , pattern:"^[A-Z]+$" }

    },
    required:["id","name", "age","department"],
    additionalProperties:false
}
module.exports = ajv.compile(StudentsSchema);