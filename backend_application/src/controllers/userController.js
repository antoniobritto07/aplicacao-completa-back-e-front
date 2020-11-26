const jwt = require('jsonwebtoken');
const Firebase = require('../models/firebaseModel');
const User = require('../models/userModel.js');
module.exports = {
    async create(request, response) {
        try {
            //FALTA IMPLEMENTAR FIREBASE
            const user = await User.createNew(request.body);
            user.password = undefined;
            return response.status(200).json({ user });
        } catch (error) {
            return response.status(400).json({ notification: "User not created!" })
            console.log("User creation failed!");
        }
    },

    async index(request, response) {
        try {
            const { filteredName } = request.params;
            const filteredData = findByName(filteredName)
            return response.status(200).json({ filteredData })
        } catch (err) {
            console.log(err)
        }
    },

    async delete(request, response) {
        try {
            let { id } = request.params;

            let result = await Ong.deleteOng(id);

            return response.json({ object: result, message: 'deletado com sucesso' });
        } catch (error) {
            console.log(error)
        }
    },

    async update(request, response) {
        let { id } = request.params;
        const newUserData = request.body;
        try {
            let user = await User.update(id, newUserData);

            return response.status(200).json({ user });
        } catch (err) {
            console.log(err)
            return response.status(500).json({ message: 'Internal server when trying to update the user.' });
        }
    }
}