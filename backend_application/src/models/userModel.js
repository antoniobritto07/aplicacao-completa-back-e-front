const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        uniques: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

class UserActions {

    static createNew(userData) {
        return new Promise((resolve, reject) => {
            User.create(userData).then((result) => {
                resolve(result);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }

    static deleteUser(id) {
        return new Promise((resolve, reject) => {
            User.deleteOne({ _id: id }).then((result) => {
                resolve(result);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }

    static getById(id) {
        return new Promise((resolve, reject) => {
            Ong.findById(id).then((result) => {
                resolve(result);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }

    static IndexbyFilter(name) {
        return new Promise((resolve, reject) => {
            Ong.findByName(name).then((result) => {
                resolve(result);
            }).catch((error) => {
                console.log(error);
                reject(error);
            })
        })
    }

    static update(id, newData) {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate({ _id: id }, newData, { new: true }).then((results) => {
                resolve(results);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }
}

module.exports = User;