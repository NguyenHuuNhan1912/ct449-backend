const express = require("express");

const contacts = require("../controller/contact.controller");

const router = express.Router();

router.route("/")
        .get(contacts.findAll)
        .post(contacts.create)
        .post(contacts.deleteAll)

router.route("/favortite")
        .get(contacts.findAllFavorite)

router.route("/:id")
        .get(contacts.findAll)
        .put(contacts.update)
        .delete(contacts.delete)
        
module.exports = router;
