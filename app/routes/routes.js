const express = require('express');
const router = express.Router();

// Importar Controladores
const UserController = require('../controllers/UserController')
const RoleController = require('../controllers/RoleController')

// Home
router.get('/', (req, res) => res.render('index'));

// Users
router.get('/usuarios', UserController.index)               // Index Users
router.get('/usuario/:id', UserController.show)             // Show User
router.put('/usuario/:id', UserController.update)           // Update User
router.get('/usuarios/create', UserController.create)       // Create User
router.post('/usuarios/store', UserController.store)        // Store User
router.delete('/usuario/:id', UserController.delete)        // Delete User

// Roles
router.get('/roles', RoleController.index)                  // Index Roles
router.get('/role/:id', RoleController.show)                // Show Role
router.put('/role/:id', RoleController.update)              // Update Role
router.get('/roles/create', RoleController.create)          // Create Role
router.post('/roles/store', RoleController.store)           // Store Role
router.delete('/role/:id', RoleController.delete)           // Delete Role

module.exports = router