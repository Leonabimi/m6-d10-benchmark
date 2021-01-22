const express = require("express");

const Model = require("../../utils/model");

const Products = new Model("products");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await Products.findOne();
    res.send({ rows });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await Products.findById(req.params.id);
    res.send({ rows });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newProduct = await Products.save(req.body);
    res.send(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const editedProduct = await Products.findByIdAndUpdate(
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
    const { rows } = await Products.findByIdAndDelete(req.params.id);
    res.send({ rows });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
