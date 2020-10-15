const { Role } = require('../models/index')

module.exports = {
    async index (req, res) {
        let roles = await Role.findAll();

        res.render('roles/index', {roles})
    },

    async show (req, res) {
        Role.findByPk(req.params.id).then(role => {
            res.render('roles/show', {role})
        })
    },

    async create (req, res) {
        res.render('roles/create')
    },

    async store (req, res) {
        Role.create({
            name: req.body.name,
            description: req.body.description,
        }).then(role => {
            res.json(role);
        }).catch(err => {
            res.json(err)
        })
    },

    async update (req, res) {
        Role.update({
            name: req.body.name,
            description: req.body.description,
        }, {
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    },

    async delete (req, res) {
        Role.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result)
        })
    }
}