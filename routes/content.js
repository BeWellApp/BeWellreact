const router = require("express").Router();
const { addContent, getContents } = require('../controller/content');

router.get("/", (req, res) => {
        getContents(req, res);
});

router.get("/:id", (req, res) => {

});

router.route("/")
        .post(addContent);



module.exports = router;