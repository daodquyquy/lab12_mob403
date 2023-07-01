const  Person  = require("../model/model");

const personController = {
    addPerson : async (req,res)=>{
        try {
            const  person = new Person(req.body);
            const savePerson = await person.save(); 
            res.status(200).json(savePerson);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    
    // Get all person
    getAllPerson : async (req,res) => {
        try {
            const persons = await Person.find();
            res.status(200).json(persons);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Get A Person
    getAPerson: async (req,res) =>{
        try {
            const person = await Person.findById(req.params.id);
            res.status(200).json(person);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Update A Person
    updatePerson : async (req,res)=>{
        try {
            const person = await Person.findById(req.params.id);
            await person.updateOne({$set: req.body});
            res.status(200).json("Update successfully !");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Delete Person
    deletePerson : async (req,res) => {
        try {
            const person = await Person.findById(req.params.id);
            await person.deleteOne({$set: req.body});
            res.status(200).json("Delete successfully !");
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = personController;