const { Superhero } = require("../db/models");

module.exports.getAllSupHeroes = async (req, res, next) => {
  try {
    const supheroes = await Superhero.
    res.status(200).send({ data: 123 });
  } catch (error) {
    next(error);
  }
};

module.exports.getSupHeroById = async (req, res, next) => {
  try {
    const suphero = await Superhero.
    res.status(200).send({ data: 123 });
  } catch (error) {
    next(error);
  }
};

module.exports.createSupHero = async (req, res, next) => {
  try {
    const createdSuphero = await Superhero.
    res.status(200).send({ data: 123 });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSupHero = async (req, res, next) => {
  try {
    const updatedSuphero = await Superhero.
    res.status(200).send({ data: 123 });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSupHero = async (req, res, next) => {
  try {
    const deletedSuphero = await Superhero.
    res.status(200).send({ data: 123 });
  } catch (error) {
    next(error);
  }
};
