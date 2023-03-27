const { Router } = require("express");
const controller = require("../controllers/users.controller");
const router = Router();
router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.Userdelete);
module.exports = router;
