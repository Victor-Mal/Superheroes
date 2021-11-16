const { Superhero } = require("../db/models");

module.exports.getAllSupHeroes = async (req, res, next) => {
  try {
    const supheroes = await Superhero.findAll({ limit: 5 });

    if (supheroes.length === 0) {
      return next(new Error("No superheroes found"));
    }

    res.status(200).send({ data: supheroes });
  } catch (error) {
    next(error);
  }
};

module.exports.getSupHeroById = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    /* 
               /:id/
      */
    const suphero = await Superhero.findOne(); // findByPK
    res.status(200).send({ data: suphero });
  } catch (error) {
    next(error);
  }
};

module.exports.createSupHero = async (req, res, next) => {
  try {
    const { body } = req;
    const createdSuphero = await Superhero.create(body);

    /* if not created */

    res.status(200).send({ data: createdSuphero });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSupHero = async (req, res, next) => {
  try {
    const updatedSuphero = await Superhero.update({ where: { id } });
    res.status(200).send({ data: updatedSuphero });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSupHero = async (req, res, next) => {
  try {
    const deletedSuphero = await Superhero.destroy({ where: { id } });
    res.status(200).send({ data: deletedSuphero });
  } catch (error) {
    next(error);
  }
};
