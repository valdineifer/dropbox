const HTTP = require('./http')

module.exports = {
  // USER RESPONSES
  userNotFound: {
    type: 'userNotFound',
    status: HTTP.BAD_REQUEST,
    describe: 'User not found'
  },

  incorretPassword: {
    type: 'incorretPassword',
    status: HTTP.UNAUTHENTICATED,
    describe: 'Incorrect password'
  },

  userCreated: {
    type: 'userCreated',
    status: HTTP.CREATED,
    describe: 'User registered with success'
  },

  userFound: {
    type: 'userFound',
    status: HTTP.BAD_REQUEST,
    describe: 'Already exist a user with email'
  },

  userOk: {
    type: 'userOk',
    status: HTTP.OK,
    describe: 'User updated with success'
  },

  userDeleted: {
    type: 'userDeleted',
    status: HTTP.OK,
    describe: 'User deleted with success'
  },

  // BOX RESPONSES
  boxNotFound: {
    type: 'boxNotFound',
    status: HTTP.BAD_REQUEST,
    describe: 'Box not found'
  },

  boxCreated: {
    type: 'boxCreated',
    status: HTTP.CREATED,
    describe: 'Box registered with success'
  },

  boxFound: {
    type: 'boxFound',
    status: HTTP.BAD_REQUEST,
    describe: 'Already exist a box with this title'
  },

  boxOk: {
    type: 'boxOk',
    status: HTTP.OK,
    describe: 'Box updated with success'
  },

  boxDeleted: {
    type: 'boxDeleted',
    status: HTTP.OK,
    describe: 'Box deleted with success'
  }
}
