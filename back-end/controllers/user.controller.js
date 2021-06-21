const User = require("../models/user.model");

const register = async function (req, res) {

    if (req.body) {
        User.create(req.body).then(data => {
            return res.status(200).json({ success: true });
        }).catch(err => {
            return res.status(400).json({ success: false });
        });
    } else {
        return res.status(400).json({ success: false });
    }
}

module.exports.register = register;

const login = async function (req, res) {
    if (req.body) {
        User.find({ email: req.body.email, password: req.body.password }).then(data => {
            if (data.length)
                return res.status(200).json({ success: true, token: Math.random().toString() });
            else
                return res.status(200).json({ success: false });
        }).catch(err => {
            return res.status(400).json({ success: false });
        });
    } else {
        return res.status(400).json({ success: false });
    }
}

module.exports.login = login;

const fetch = async function (req, res) {
    User.find({}, { name: 1, email: 1 }).then(data => {
        return res.status(200).json({ success: true, data });
    }).catch(err => {
        return res.status(400).json({ success: false });
    });
}

module.exports.fetch = fetch;