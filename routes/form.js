const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();
router.use(formidable());

//j'exporte mon model

const Formulaire = require("../models/Form");
const emailer = require("../middlewares/sendEmail");

router.get("/info-contact", async (req, res) => {
  try {
    const infoForm = await Formulaire.find();
    res.json(infoForm);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.post("/portfolio-contact", async (req, res) => {
  try {
    const formUser = await Formulaire.findOne({ email: req.fields.email });
    if (formUser) {
      res.json({
        message: "You again, no way ! you send your contact before",
      });
    } else {
      if (req.fields.email && req.fields.name && req.fields.mobile) {
        const formSend = new Formulaire({
          email: req.fields.email,
          name: req.fields.name,
          mobile: req.fields.mobile,
        });

        await formSend.save();
        emailer(formSend.email, formSend.name, formSend.mobile);
        res.json("Email send");
      } else {
        res.json({ message: "error.message " });
      }
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = router;
