const db = require("../db");


const getUserService = (gId) => {
  let qr = `select * from users `;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const createUserervice = (
  name,
  email,
  age,
) => { 
  const qr = `INSERT INTO users (  name, email, age )
    VALUES ('${name}','${age}','${email}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
 
};


const getUserByidService = (gId) => {
  let qr = `select * from users where id ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

const updateUserService = (user) => {
  let qr = `UPDATE users SET
  name='${user.name}',email='${user.email}',age='${user.age}'
   where id  ='${user.id}' `;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

const deleteUserService = (gId) => {
  let qr = `delete from users WHERE id =${gId}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = {
  createUserervice,
  getUserService,
  getUserByidService,
  updateUserService,
  deleteUserService,
 
};
