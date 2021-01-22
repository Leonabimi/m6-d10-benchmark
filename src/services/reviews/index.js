const express = require("express");

const Model = require("../../utils/model");

const Reviews = new Model("reviews");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await Reviews.findOne();
    res.send({ rows });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await Reviews.findById(req.params.id);
    res.send({ rows });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newProduct = await Reviews.save(req.body);
    res.send(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const editedProduct = await Reviews.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(editedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await Reviews.findByIdAndDelete(req.params.id);
    res.send({ rows });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
