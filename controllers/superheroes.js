module.exports.getAllSupHeroes = async (req, res, next) => {
  try {
    res.status(200).send({ data: 123 });
  } catch (error) {
    next(error);
  }
};

module.exports.getSupHeroById = async (req, res, next) => {
  try {
    res.status(200).send({ data: 123 });
  } catch (error) {
    next(error);
  }
};

module.exports.createSupHero = async (req, res, next) => {
  try {
    res.status(200).send({ data: 123 });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSupHero = async (req, res, next) => {
  try {
    res.status(200).send({ data: 123 });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSupHero = async (req, res, next) => {
  try {
    res.status(200).send({ data: 123 });
  } catch (error) {
    next(error);
  }
};
