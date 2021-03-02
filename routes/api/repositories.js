const router = require("express").Router();
const repositoriesController = require("../../controllers/repositoriesController");

// Update the repositories by the _id.
console.log('&&& in repositories.js, post updateRepositories');
router.route("/:id").post(repositoriesController.updateRepositories);

// find 1 repo to determine if Repositories collection is populated
router.route("/findRepo").get(repositoriesController.findRepo);

module.exports = router;
