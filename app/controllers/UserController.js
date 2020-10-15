const { User, Role } = require('../models/index');

module.exports = {
    async index (req, res) {
        let users = await User.findAll({
            include: {
                association: 'role',
                attributes: ['name']
            },
            attributes: {
                exclude: ['role_id']
            }
        });
        res.render('users/index', {users})
    },

    async show (req, res) {
        User.findByPk(req.params.id, {
            include: {
                association: 'role',
                attributes: ['name']
            },
            attributes: {
                exclude: ['role_id']
            }
        }).then(user => {
            res.render('users/show', {user})
        })
    },

    async create (req, res) {
        let roles = await Role.findAll();
        res.render('users/create', {roles})
    },

    async store (req, res) {
        let role = await Role.findOne({where: {name: req.body.role}})
        User.create({
            email: req.body.email,
            name: req.body.name,
            surname: req.body.surname,
            second_surname: req.body.second_surname,
            role_id: role.dataValues.id
        }).then(user => {
            res.json(user);
        }).catch(err => {
            res.json(err)
        })
    },

    async update (req, res) {
        User.update({
            email: req.body.email,
            name: req.body.name,
            surname: req.body.surname,
            second_surname: req.body.second_surname,
        }, {
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.json(err)
        })
    },

    async delete (req, res) {
        User.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result)
        })
    }
}