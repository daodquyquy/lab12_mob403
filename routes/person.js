const router = require("express").Router();
const personController = require("../controllers/personController");

// Add person
router.post("/", personController.addPerson);

// Get ALL Person 
router.get("/", personController.getAllPerson);

// Get A Person
router.get("/:id",personController.getAPerson);

// Update A Person
router.put("/:id",personController.updatePerson);

// Update A Person
router.delete("/:id",personController.deletePerson);

module.exports = router;
