const express = require("express");
const shController = require("../controllers/superheroes");
const validateHero = require("../middlewares/validateHero");

/* Superheroes Router */
const shRouter = express.Router();

/* /api/superheroes */

/* HTTP CRUD methods: get, post, (put, patch), delete */

shRouter
  .route("/")
  /* get all */
  .get(shController.getAllSupHeroes)
  /* create */
  .post(validateHero, shController.createSupHero);

shRouter
  .route("/:id")
  /* get one */
  .get(shController.getSupHeroById)
  /* update */
  .patch(validateHero, shController.updateSupHero)
  /* delete */
  .delete(shController.deleteSupHero);

module.exports = shRouter;
