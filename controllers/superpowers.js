const { Superpowers } = require("../db/models");

const _ = require("lodash");

const prepareSuperpower = (body) => _.pick(body, ["name", "description"]);

module.exports.getAllSuperpowers = async (req, res, next) => {
  try {
    const superpowers = await Superpowers.findAll({ limit: 5 });

    if (superpowers.length === 0) {
      return next(new Error("No superpowers found"));
    }

    res.status(200).send({ data: superpowers });
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperpowersById = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const foundSuperpowers = await Superpowers.findOne({ where: { id } });
    if (!foundSuperpowers) {
      return next(new Error("Superpower not found"));
    }
    res.status(200).send({ data: foundSuperpowers });
  } catch (error) {
    next(error);
  }
};

module.exports.createSuperpowers = async (req, res, next) => {
  try {
    const { body } = req;
    const createdSuperpowers = await Superpowers.create(body);
    res.status(200).send({ data: createdSuperpowers });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSuperpowers = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const prep = prepareSuperpower(body);

    const [rowsCount, [updatedSuperpowers]] = await Superpowers.update(prep, {
      where: {
        id,
      },
      returning: true,
    });

    if (rowsCount === 0) {
      return next(new Error("Superpower not found"));
    }

    res.status(200).send({ data: updatedSuperpowers });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSuperpowers = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const foundSuperpower = await Superpowers.findByPk(id);

    if (!foundSuperpower) {
      return next(new Error("Superpower not found"));
    }

    const verdict = await foundSuperpower.destroy();

    if (!verdict) {
      throw new Error("Cannot delete superpower");
    }

    res.status(200).send({ data: foundSuperpower });
  } catch (error) {
    next(error);
  }
};
