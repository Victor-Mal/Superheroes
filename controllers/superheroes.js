const { Superhero } = require("../db/models");

const _ = require("lodash");

const prepareSupHero = (body) =>
  _.pick(body, [
    "nickname",
    "realName",
    "originDescription",
    "superpowersId",
    "catchPhrase",
    "images",
  ]);

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

    const foundSuphero = await Superhero.findOne({ where: { id } });
    if (!foundSuphero) {
      return next(new Error("Superhero not found"));
    }
    res.status(200).send({ data: foundSuphero });
  } catch (error) {
    next(error);
  }
};

module.exports.createSupHero = async (req, res, next) => {
  try {
    const { body } = req;
    const createdSuphero = await Superhero.create(body);

    res.status(200).send({ data: createdSuphero });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSupHero = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const prep = prepareSupHero(body);

    const [rowsCount, [updatedSuperhero]] = await Superhero.update(prep, {
      where: {
        id,
      },
      returning: true,
    });

    if (rowsCount === 0) {
      return next(new Error("Superhero not found"));
    }

    res.status(200).send({ data: updatedSuperhero });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSupHero = async (req, res, next) => {
  try {

    const {
      params: { id },
    } = req;

    const foundSuperhero = await Superhero.findByPk(id);

    if (!foundSuperhero) {
      return next(new Error("Superhero not found"));
    }

    const verdict = await foundSuperhero.destroy();

    if (!verdict) {
      throw new Error("Cannot delete superhero");
    }

    res.status(200).send({ data: foundSuperhero });
  } catch (error) {
    next(error);
  }
};
