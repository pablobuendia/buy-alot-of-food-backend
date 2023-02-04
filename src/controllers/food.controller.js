const { models } = require('../sequelize');

const findAll = async (req, res) => {
  const users = await models.users.findAll();
  res.status(200).json(users);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await models.user.findByPk(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send('404 - not found');
  }
};

const postById = async (req, res) => {
  if (req.body.id) {
    req.status(400).send('Bad request: ID should not be provided, since it is determined automatically by the database.');
  } else {
    await models.user.create(req.body);
    res.status(201).end();
  }
};

const updateById = async (req, res) => {
  const { id } = req.params;

  if (req.body.id === id) {
    await models.user.update(req.body, {
      where: {
        id,
      },
    });
    res.status(200).end();
  } else {
    res.status(400).send('Bad request: the id param should match the id in the request body');
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  await models.user.destroy({
    where: {
      id,
    },
  });
  res.status(200).end();
};

module.exports = {
  findAll,
  findById,
  postById,
  updateById,
  deleteById,
};
