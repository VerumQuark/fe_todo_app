const { User } = require( './db/models' );
const bcrypt = require( 'bcrypt' );
/*
* createUser
* getUserById
* updateUser
* deleteUser
* */

const hashPassword = async  password => {
  try {
    return bcrypt.hash( password, 10);
  } catch (e) {

  }
};

const createUser = async data => {
  try {
    data.passwordHash = await hashPassword( data.password )
    const createdUser = await User.create( data );

    return createdUser;
  } catch (e) {
    throw e;
  }
};

createUser( {
  firstName: "Name",
  lastName: "Surname",
  email: "test@gmail.com",
  login: "login_login12",
  password: "teh1234_utI"
            })
.then(console.log)
.catch(console.err);