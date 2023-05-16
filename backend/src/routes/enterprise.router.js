const express = require("express");
const enterpriseController = require("../controllers/enterprise.controller");

const router = express.Router();

router.get("/empresas", enterpriseController.getAll);

router.get("/empresas/:id", enterpriseController.getById);

router.post("/empresas", enterpriseController.create);

router.put("/empresas/:id", enterpriseController.update);

router.delete("/empresas/:id", enterpriseController.remove);

module.exports = router;
