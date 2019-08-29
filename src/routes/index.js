const routes = require('express').Router()

const UserController = require('../app/controllers/UserController')
const AuthController = require('../app/controllers/AuthController')
const BoxController = require('../app/controllers/BoxController')

// Authentication routes
routes.post('/signin', AuthController.store)

// User routes
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.get('/users/:id', UserController.get)
routes.delete('/users/:id', UserController.destroy)

// Box routes
routes.post('/boxes', BoxController.store)

module.exports = routes
