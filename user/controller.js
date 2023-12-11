const {createUserervice,
    getUserService,
    getUserByidService,
    updateUserService,
    deleteUserService,
   } = require('./service');

const getUser = async (req, res, next) => {
  try {
    
    const users = await getUserService();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  const { name,  age, email } = req.body;
  console.log( name,  age, email);
  try {
    const result = await createUserervice(name,age, email);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await getUserByidService(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  const { phone, name, email, age } = req.body;
  const userData = {
    id: req.params.id,
    phone,
    name,
    email,
    age,
  };
  try {
    const result = await updateUserService(userData);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const result = await deleteUserService(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
